import React from 'react';
import { TrackBrowser } from './components/TrackBrowser';
import { PlaylistBrowser } from './components/PlaylistBrowser';
import userPlaylists from './mock/user_playlists.json';
import playlistTracks from './mock/playlist_tracks.json';
import {PlaylistTracks, UserPlaylists} from "./interfaces/spotify";
import Playlist from "./classes/Playlist";
import Track from "./classes/Track";

function App() {
    let tracks : Track[] = getTrackListFromSpotify(playlistTracks);
    let playlists : Playlist[] = getPlaylistsFromSpotify(userPlaylists);

    return <div className="App">
        <PlaylistBrowser playlists={playlists}/>
        <TrackBrowser tracks={tracks}/>
    </div>;
}

function getPlaylistsFromSpotify(spotifyPlaylists : UserPlaylists) {
    return spotifyPlaylists.items.map((item) => {
        return Playlist.createFromSpotify(item);
    });
}

function getTrackListFromSpotify(spotifyTrackList : PlaylistTracks) {
    return spotifyTrackList.items.map((item) => {
        return Track.createFromSpotify(item.track);
    });
}

export default App;