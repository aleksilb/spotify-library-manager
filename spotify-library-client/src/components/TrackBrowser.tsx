import * as React from "react";
import {Album, Artist, Track} from "../model/interfaces";
import {ColDef, DataGrid, ValueGetterParams} from "@material-ui/data-grid";

interface TrackBrowserProps {
    tracks ?: Track[];
}

const columns: ColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'artists', headerName: 'Artists', width: 200,
        valueFormatter: (params: ValueGetterParams) => {
            let artists = params.value as Artist[];
            let artistNames = artists != null ? artists.map((artist) => artist.name) : [];
            return artistNames.join(', ')}},
    { field: 'album', headerName: 'Album', width: 200, valueFormatter: params => (params.value as Album).name },
    { field: 'year', headerName: 'Year', width: 100 },
    { field: 'plays', headerName: 'Plays', width: 100 },
]

export const TrackBrowser = ({tracks} : TrackBrowserProps) => {
    return <div style={{ height: 1200, width: '100%' }} >
        <h2>Playlist</h2>
        {tracks != null && <DataGrid columns={columns} rows={tracks} />}
    </div>
};
