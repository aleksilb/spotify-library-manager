import React from 'react';

function SongList(props) {
    return (<table>
        <thead>
        <tr>
            <th>Song</th>
            <th>Album</th>
            <th>Artist</th>
        </tr>
        </thead>
        <tbody>
        {props.songs.map((song) =>
            <tr key={song.name}>
                <td>
                    {song.name}
                </td>
                <td>
                    {song.album}
                </td>
                <td>
                    {song.artist}
                </td>
            </tr>
        )}
        </tbody>
    </table>);
}

export default SongList;