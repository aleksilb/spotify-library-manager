import {Playlist as SpotifyPlaylist, UserPlaylists, Track as SpotifyTrack} from "../interfaces/spotify";
import Track from "../classes/Track";
import Playlist from "../classes/Playlist";
import Album from "../classes/Album";
import Artist from "../classes/Artist";

export default class Mapper {
    static tracksFromSpotifyPlaylist = (spotifyPlaylist : SpotifyPlaylist) : Track[] => {
        return spotifyPlaylist.tracks.items.map((item) => {
            return Track.createFromSpotify(item.track);
        });
    };

    static playlistsFromSpotifyUserPlaylists = (spotifyPlaylists : UserPlaylists) => {
        return spotifyPlaylists.items.map((item) => {
            return Playlist.createFromSpotify(item);
        });
    };

    static createTrack = (spotifyTrack : SpotifyTrack) : Track => {
        let album : Album = Album.createFromSpotify(spotifyTrack.album);
        let artists : Artist[] = [];
        spotifyTrack.artists.map((artist) => {
            artists.push(Artist.createFromSpotify(artist));
        });

        return new Track(spotifyTrack.id, spotifyTrack.name, album, artists, "");
    }
}
