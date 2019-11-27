import React from 'react';

function PlaylistList(props) {
    return <div>
        <h2>Playlists</h2>
        <ul>
        {props.playlists.map((playlist) =>
            <li key={playlist.id}>{playlist.name}</li>
        )}
    </ul>
    </div>
}

export default PlaylistList;