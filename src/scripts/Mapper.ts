import {PlaylistTracks, UserPlaylists} from "../interfaces/spotify";
import Track from "../classes/Track";
import Playlist from "../classes/Playlist";

export default class Mapper {
    static tracksFromSpotifyPlaylist = (spotifyTrackList : PlaylistTracks) : Track[] => {
        return spotifyTrackList.items.map((item) => {
            return Track.createFromSpotify(item.track);
        });
    };

    static playlistsFromSpotifyUserPlaylists = (spotifyPlaylists : UserPlaylists) => {
        return spotifyPlaylists.items.map((item) => {
            return Playlist.createFromSpotify(item);
        });
    };
}