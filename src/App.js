import React from 'react';
import SongList from './components/SongList.js';
import PlaylistList from './components/PlaylistList';

function App() {
  return (
    <div className="App">
        <PlaylistList playlists={playlists}/>
        <SongList songs={songs}/>
    </div>
  );
}

let songs = [
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
];

let playlists = [
    {"name" : "Uudet tsekattavat"}
];

export default App;