import React from 'react';

function SongList(props) {
    return (<div>
        <h2>Playlist</h2>
        <table>
        <thead>
        <tr>
        {fields.map((field) =>
            <th>{field.label}   </th>
        )}
        </tr>
        </thead>
        <tbody>
        {props.songs.map((song) =>
            <tr key={song.name}>
                {fields.map((field) =>
                        <td>{song[field.field]}</td>
                )}
            </tr>
        )}
        </tbody>
    </table>
    </div>);
}

let fields = [
    {
        "label" : "Name",
        "field" : "name"
    },
    {
        "label" : "Album",
        "field" : "album"
    },
    {
        "label" : "Artist",
        "field" : "artist"
    },
    {
        "label" : "Length",
        "field" : "length"
    },
    {
        "label" : "Year",
        "field" : "year"
    }
];

export default SongList;