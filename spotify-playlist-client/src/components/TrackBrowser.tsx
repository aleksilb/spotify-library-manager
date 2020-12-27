import * as React from "react";
import {Track} from "../model/interfaces";

interface TrackBrowserProps {
    tracks ?: Track[];
}

export const TrackBrowser = ({tracks} : TrackBrowserProps) => {
    return <div>
        <h2>Playlist</h2>
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Artists</th>
            <th>Album</th>
            <th>Year</th>
            <th>Country</th>
        </tr>
        </thead>
        <tbody>
        {tracks != null && tracks.map((track) => {
            let artistNames = track.artists != null ? track.artists.map((artist) => {
                return artist.name;
            }) : [];
            return <tr key={track.id}>
                <td>{track.name}</td>
                <td>{artistNames.join(', ')}</td>
                <td>{track.album != null && track.album.name}</td>
                <td>{track.year}</td>
                <td>{track.country}</td>
            </tr>
            }
        )}
        </tbody>
    </table>
    </div>
};
