import React from 'react';

function PlayListList(props) {
    return <ul>
        {props.playlists.map((playlist) =>
            <li>{playlist.name}</li>
        )}
    </ul>
}

export default PlayListList;