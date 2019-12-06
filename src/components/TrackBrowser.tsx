import * as React from "react";
import Track from "../classes/Track";

interface TrackBrowserProps {
    tracks: Track[];
}

export const TrackBrowser = (props : TrackBrowserProps) => {
    return <div>
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
            let artistNames = track.artists.map((artist) => {
                return artist.name;
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
    </div>
};