import aleksisPlaylists from '../mock/aleksis_playlists.json';
import playlist1 from '../mock/playlist_1.json';
import playlist2 from '../mock/playlist_2.json';
import Mapper from "./Mapper";

export default class Spotify {
    static getUserPlaylists(userName : string) {
        return Mapper.playlistsFromSpotifyUserPlaylists(aleksisPlaylists);
    }

    static getPlaylistTracks(id : string) {
        if(id === '0hXzW43N9IsskVZW6WlobW') {
            return Mapper.tracksFromSpotifyPlaylist(playlist1);
        } else if(id === '0THtNMy6URN5YxEKPEi3VO') {
            return Mapper.tracksFromSpotifyPlaylist(playlist2);
        }

    }
}
