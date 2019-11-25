import React from 'react';
import SongList from './components/SongList.js';

function App() {
  return (
    <div className="App">
      <SongList songs={songs}/>
    </div>
  );
}

let songs = [
  {name: 'Hey Big Eyes',
    album: 'Pang',
    artist: 'Caroline Polachek',
    length: 376},
  {name: 'LesAlpx',
    album: 'Crush',
    artist: 'Floating Points',
    length: 189}
];

export default App;