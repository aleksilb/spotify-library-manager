import * as spotify from '../interfaces/spotify';
import Track from "./Track";

class TrackList {
    tracks : Track[];

    constructor(tracks: Track[]) {
        this.tracks = tracks;
    }

    static createFromSpotify(spotifyPlaylist : spotify.PlaylistTracks) {
        let playlistTracks : Track[] = [];
        spotifyPlaylist.items.map((item) => {
            playlistTracks.push(Track.createFromSpotify(item.track));
        });
        return new TrackList(playlistTracks);
    }
}

export default TrackList;