import React from 'react';

function SongList(props) {
    return (<table>
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
    </table>);
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