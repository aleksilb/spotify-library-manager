import Playlist from "./model/Playlist";
import * as Spotify from "./service/Spotify";
import * as SpotifyModel from  "./model/interfaces/spotify";
import Track from "./model/Track";
import Artist from "./model/Artist";
import * as Database from "./Database";
import * as Services from "./Services";
import Album from './model/Album';

export function getUserPlaylists(userName : string) : Playlist[] {
    let spotifyPlaylists = Spotify.getUserPlaylists(userName);
    return  spotifyPlaylists.map(spotifyPlaylist => getPlaylist(spotifyPlaylist.id, false));
}

export function getPlaylist(id : string, withTracks : boolean) : Playlist {
    let spotifyPlaylist = Spotify.getPlaylist(id);
    let playlist = new Playlist(spotifyPlaylist.id, spotifyPlaylist.name);
    if(withTracks) {
        playlist.tracks = [];
        spotifyPlaylist.tracks.items.forEach(spotifyTrack => {
            let track = getTrack(spotifyTrack.track);
            playlist.tracks.push(track);
        });
    }
    return playlist;
}

export function getTrack(spotifyTrack : SpotifyModel.Track) : Track {
    let artists = spotifyTrack.artists.map(artist => getArtist(artist));
    let album = getAlbum(spotifyTrack.album);
    let track = Database.getTrack(spotifyTrack.id);
    if (track == null) {
        track = Services.getTrack({spotifyTrack : spotifyTrack, artists : artists, album : album});
        Database.saveTrack(track);
    }
    return track;
}

export function getAlbum(spotifyAlbum : SpotifyModel.Album) : Album {
    let album = Database.getAlbum(spotifyAlbum.id);
    if(album == null) {
        album = Services.getAlbum({spotifyAlbum : spotifyAlbum});
        Database.saveAlbum(album);
    }
    return album;
}

export function getArtist(spotifyArtist : SpotifyModel.Artist) : Artist {
    let artist = Database.getArtist(spotifyArtist.id);
    if(artist == null) {
        artist = Services.getArtist({spotifyArtist : spotifyArtist});
        Database.saveArtist(artist);
    }
    return artist;
}
