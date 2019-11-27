import React from 'react';
import SongList from './components/SongList.js';
import PlaylistList from './components/PlaylistList';

function App() {
    let playlistSongs = [
        {
            "playlistId": 1,
            "songs" : [
                {name: 'Hey Big Eyes',
                    album: 'Pang',
                    artist: 'Caroline Polachek',
                    length: '3:01',
                    year: 2019},
                {name: 'LesAlpx',
                    album: 'Crush',
                    artist: 'Floating Points',
                    length: '5:13',
                    year: 1999 }
            ]
        },
        {
            "playlistId": 2,
            "songs" : [
                {name: 'Bess´s Dance',
                    album: 'Spring',
                    artist: 'Itasca',
                    length: '4:05',
                    year: 2019},
                {name: 'Conscious',
                    album: 'Ocean Blues',
                    artist: 'Yula Kasp',
                    length: '4:42',
                    year: 2016 }
            ]
        }
    ];

    let playlists = [
        {
            "id" : 1,
            "name" : "Uudet tsekattavat"
        },
        {
            "id" : 2,
            "name" : "Vanhat tsekattavat"
        }
    ];

    let songs = playlistSongs.find(playlist => playlist.playlistId === 2).songs;

    return <div className="App">
        <PlaylistList playlists={playlists}/>
        <SongList songs={songs}/>
    </div>;
}



export default App;