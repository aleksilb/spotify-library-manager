import React from 'react';

function SongList(props) {
    return (<div>
        <h2>Playlist</h2>
        <table>
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {props.items.map((item) => {
                let track = item.track;
                if(!track) return;
                return <tr key={track.id}>
                    <td>{track.name}</td>
                </tr>
            }
        )}
        </tbody>
    </table>
    </div>);
}

export default SongList;