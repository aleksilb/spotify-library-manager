import {Album, Artist, Playlist, Track} from './model/interfaces';
import * as Spotify from "./service/Spotify";
import * as SpotifyModel from "./model/external/spotify";
import * as Mapping from "./Mapping";
import * as Database from "./Database";
import * as Services from "./Services";

let artistPromiseCache: { [key: string]: Promise<Artist> } = {};
let albumPromiseCache: { [key: string]: Promise<Album> } = {};

export function getUserPlaylists(authorization: string): Promise<Playlist[]> {
    return Spotify.getUserPlaylists(authorization)
        .then(spotifyPlaylists =>
            spotifyPlaylists.map(spotifyPlaylist =>
                Mapping.createPlaylist(spotifyPlaylist)))
        .catch(error => {
            console.error("Failed to get user playlists with authorization " + authorization);
            console.error(error);
            return [];
        });
}

export function getPlaylist(id: string): Promise<Playlist> {
    return Spotify.getPlaylist(id)
        .then(spotifyPlaylist => {
            let playlist = Mapping.createPlaylist(spotifyPlaylist);
            let trackPromises = spotifyPlaylist.tracks.items.map(spotifyTrack => getTrack(spotifyTrack.track));
            return Promise.all([playlist, Promise.all(trackPromises)]);
        }).then(([playlist, tracks]) => {
            playlist.tracks = tracks;
            return playlist;
        }).catch(error => {
            console.error("Failed to get playlist " + id);
            console.error(error);
            return null;
        });
}

export function getTrack(spotifyTrack: SpotifyModel.Track): Promise<Track> {
    return Database.getTrack(spotifyTrack.id)
        .then(track => {
            if (track != null) {
                return track;
            } else {
                let artistPromises = spotifyTrack.artists.map(artist => getArtist(artist));
                let albumPromise = getAlbum(spotifyTrack.album);
                return Promise.all([albumPromise, Promise.all(artistPromises)]).then(([album, artists]) => {
                    let trackPromise = Services.getTrack({spotifyTrack: spotifyTrack, artists: artists, album: album});
                    Database.saveTrack(trackPromise);
                    return trackPromise;
                });
            }
        }).catch(error => {
            console.error("Failed to get track " + spotifyTrack.id);
            console.error(error);
            return null;
        });
}

export function getAlbum(spotifyAlbum: SpotifyModel.Album): Promise<Album> {
    let id = spotifyAlbum.id;
    return Database.getAlbum(id)
        .then(album => {
            if (album != null) {
                return album;
            } else if (albumPromiseCache.hasOwnProperty(id)) {
                return albumPromiseCache[id];
            } else {
                let albumPromise = Services.getAlbum({spotifyAlbum: spotifyAlbum});
                albumPromiseCache[id] = albumPromise;
                Database.saveAlbum(albumPromise);
                return albumPromise;
            }
        }).catch(error => {
            console.error("Failed to get album " + id);
            console.error(error);
            return null;
        });
}

export function getArtist(spotifyArtist: SpotifyModel.Artist): Promise<Artist> {
    let id = spotifyArtist.id;
    return Database.getArtist(id)
        .then(artist => {
            if (artist != null) {
                return artist;
            } else if (artistPromiseCache.hasOwnProperty(id)) {
                return artistPromiseCache[id];
            } else {
                const artistPromise = Services.getArtist({spotifyArtist: spotifyArtist});
                artistPromiseCache[id] = artistPromise;
                Database.saveArtist(artistPromise);
                return artistPromise;
            }
        }).catch(error => {
            console.error("Failed to get artist " + id);
            console.error(error);
            return null;
        });
}
