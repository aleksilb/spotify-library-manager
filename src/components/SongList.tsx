import * as React from "react";
import TrackList from "../classes/TrackList";

export const SongList = (props : TrackList) => {
    return (<div>
        <h2>Playlist</h2>
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Artists</th>
            <th>Album</th>
        </tr>
        </thead>
        <tbody>
        {props.tracks.map((track) => {
            let artistNames : [string] = [null];
            track.artists.map((artist) => {
                artistNames.push(artist.name);
            });
            return <tr key={track.id}>
                <td>{track.name}</td>
                <td>{artistNames.join(', ')}</td>
                <td>{track.album.name}</td>
            </tr>
            }
        )}
        </tbody>
    </table>
    </div>);
};