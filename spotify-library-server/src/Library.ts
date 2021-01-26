import {Album, Artist, Playlist, Track} from './model/interfaces';
import * as Spotify from "./service/Spotify";
import * as SpotifyModel from "./model/external/spotify";
import * as Mapping from "./Mapping";
import * as Database from "./Database";
import * as Services from "./Services";

let artistPromiseCache: { [key: string]: Promise<Artist> } = {};
let albumPromiseCache: { [key: string]: Promise<Album> } = {};

export async function getUserPlaylists(authorization: string): Promise<Playlist[]> {
    let spotifyPlaylists = await Spotify.getUserPlaylists(authorization);

    return spotifyPlaylists.map(spotifyPlaylist =>
        Mapping.createPlaylist({spotifyPlaylist: spotifyPlaylist}));
}

export async function getPlaylist(id: string): Promise<Playlist> {
    let spotifyPlaylist = await Spotify.getPlaylist(id);
    let tracks = spotifyPlaylist.tracks.items.map(playlistTrack => Mapping.createTrack({spotifyTrack: playlistTrack.track}))

    return  Mapping.createPlaylist({spotifyPlaylist: spotifyPlaylist, tracks: tracks});
}

export async function getTrack(id: string): Promise<Track> {
    const spotifyTrack = await Spotify.getTrack(id);

    let artistPromises = spotifyTrack.artists.map(artist => getArtist(artist));
    let albumPromise = getAlbum(spotifyTrack.album);
    let [album, artists] = await Promise.all([albumPromise, Promise.all(artistPromises)]);

    let trackPromise = Services.getTrack({spotifyTrack: spotifyTrack, artists: artists, album: album});
    Database.saveTrack(trackPromise);
    return trackPromise;
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
