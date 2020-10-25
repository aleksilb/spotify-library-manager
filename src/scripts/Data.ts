import playlistsUser from '../mock/spotify/playlists_aleksi.json';
import playlist1 from '../mock/spotify/playlist_1.json';
import playlist2 from '../mock/spotify/playlist_2.json';
import mbCamille from '../mock/music_brainz/artist_camille.json';
import artistCamille from '../mock/artist_camille.json';
import Mapper from "./Mapper";

export default class Data {
    static getUserPlaylists(userName : string) {
        return Mapper.playlistsFromSpotifyUserPlaylists(playlistsUser);
    }

    static getPlaylistTracks(id : string) {
        if(id === '0hXzW43N9IsskVZW6WlobW') {
            return Mapper.tracksFromSpotifyPlaylist(playlist1);
        } else if(id === '0THtNMy6URN5YxEKPEi3VO') {
            return Mapper.tracksFromSpotifyPlaylist(playlist2);
        }
    }

    static getArtist(id : string) {
        return mbCamille;
    }
}
