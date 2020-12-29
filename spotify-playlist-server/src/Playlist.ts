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
            let trackPromises = spotifyPlaylist.tracks.items.map(spotifyTrack => getTrack(spotifyTrack.track));
            return Promise.all([playlist, Promise.all(trackPromises)]);
        }).then(([playlist, tracks]) => {
            playlist.tracks = tracks;
            return playlist;
        });
}

export function getTrack(spotifyTrack : SpotifyModel.Track) : Promise<Track> {
    return Database.getTrack(spotifyTrack.id).then(track => {
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
        });
}

export function getAlbum(spotifyAlbum : SpotifyModel.Album) : Promise<Album> {
    return Database.getAlbum(spotifyAlbum.id).then(album => {
        if(album != null) {
            return album;
        } else {
            let albumPromise = Services.getAlbum({spotifyAlbum : spotifyAlbum});
            Database.saveAlbum(albumPromise);
            return albumPromise;
        }
    })


}

export function getArtist(spotifyArtist : SpotifyModel.Artist) : Promise<Artist> {
    let id = spotifyArtist.id;
    return Database.getArtist(id)
        .then(artist => {
            if(artist != null) {
                return artist;
            } else if(artistPromiseCache.hasOwnProperty(id)) {
                return artistPromiseCache[id];
            } else {
                const artistPromise = Services.getArtist({spotifyArtist : spotifyArtist});
                artistPromiseCache[id] = artistPromise;
                Database.saveArtist(artistPromise);
                return artistPromise;
            }
        });
}
