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
                <td>
                    {toMinutes(song.length)}
                </td>
            </tr>
        )}
        </tbody>
    </table>);
}

function toMinutes(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {seconds = "0"+seconds;}

    return minutes + ":" + seconds;
}

export default SongList;