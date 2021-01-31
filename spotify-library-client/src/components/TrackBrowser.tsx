import * as React from "react";
import {Album, Artist, Track} from "../model/interfaces";
import {CellParams, ColDef, DataGrid, ValueGetterParams} from "@material-ui/data-grid";

interface TrackBrowserProps {
    tracks ?: Track[];
    deleteHandler: ((id: string) => void);
}

let deleteTrack = function (id:string){};

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
    { field: 'delete', headerName: 'Delete', width: 100, renderCell: (params: CellParams) => {
            return <button onClick={deleteTrack.bind(null, params.row.id.toString())}>Click</button>;
        } }
]

export const TrackBrowser = ({tracks, deleteHandler} : TrackBrowserProps) => {
    deleteTrack = deleteHandler;
    return <div style={{ height: 1200, width: '100%' }} >
        <h2>Playlist</h2>
        {tracks != null && <DataGrid columns={columns} rows={tracks} />}
    </div>
};
