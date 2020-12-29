import {Album, Artist, Playlist, Track} from './model/interfaces';
import spotify from "./service/Spotify";
import * as SpotifyModel from "./model/external/spotify";
import * as Mapping from "./Mapping";
import * as Database from "./Database";
import * as Services from "./Services";

let artistPromiseCache : {[key : string] : Promise<Artist>} = {};

export function getUserPlaylists(authorization : string) : Promise<Playlist[]> {
    return spotify.getUserPlaylists(authorization)
        .then(spotifyPlaylists =>
            spotifyPlaylists.map(spotifyPlaylist =>
                Mapping.createPlaylist(spotifyPlaylist)));
}

export function getPlaylist(id : string) : Promise<Playlist> {
    return spotify.getPlaylist(id)
        .then(spotifyPlaylist => {
            let playlist = Mapping.createPlaylist(spotifyPlaylist);
            let trackPromises : Promise<Track>[] = spotifyPlaylist.tracks.items.map(spotifyTrack => {
                return getTrack(spotifyTrack.track)
            });
            return Promise.all(trackPromises).then(tracks => {
                playlist.tracks = tracks;
                return playlist;
            });
        })
}

export function getTrack(spotifyTrack : SpotifyModel.Track) : Promise<Track> {
    return Database.getTrack(spotifyTrack.id).then(track => {
            if (track != null) {
                return track;
            } else {
                let artists: Promise<Artist>[] = spotifyTrack.artists.map(artist => getArtist(artist));
                return Promise.all(artists).then(artists => {
                    let album = getAlbum(spotifyTrack.album);
                    let trackPromise = Services.getTrack({spotifyTrack: spotifyTrack, artists: artists, album: album});
                    Database.saveTrack(trackPromise);
                    return trackPromise;
                });
            }
        }).then(track => {
            return track
    });
}

export function getAlbum(spotifyAlbum : SpotifyModel.Album) : Album {
    let album = Database.getAlbum(spotifyAlbum.id);
    if(album == null) {
        album = Services.getAlbum({spotifyAlbum : spotifyAlbum});
        Database.saveAlbum(album);
    }
    return album;
}

export function getArtist(spotifyArtist : SpotifyModel.Artist) : Promise<Artist> {
    let id = spotifyArtist.id;
    return Database.getArtist(id)
        .then(artist => {
            if(artist != null) {
                return new Promise((resolve) => resolve(artist));
            } else if(artistPromiseCache.hasOwnProperty(id)) {
                return artistPromiseCache[id];
            } else {
                const artistPromise = Services.getArtist({spotifyArtist : spotifyArtist});
                artistPromiseCache[id] = artistPromise;
                Database.saveArtist(spotifyArtist.id, artistPromise);
                return artistPromise;
            }
        });
}
