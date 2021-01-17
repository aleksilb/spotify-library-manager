import React, {useState} from 'react';
import {Playlist} from "../model/interfaces";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    List,
    ListItem,
    ListItemText,
    Radio,
    RadioGroup
} from "@material-ui/core";

interface PlaylistBrowserProps {
    playlists : Playlist[],
    selectHandler : ((playlistId: string) => void)
}

export const PlaylistBrowser = ({playlists, selectHandler} : PlaylistBrowserProps) => {
    const [sortField, setSortField] = useState("name");
    const [sortDir, setSortDir] = useState("asc");

    const handleSortingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let field = (event.target as HTMLInputElement).value;
        setSortField(field);
        handleSortChange(field, sortDir);
    };

    const handleSortDirChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let direction = (event.target as HTMLInputElement).value;
        setSortDir(direction);
        handleSortChange(sortField, direction);
    };

    const handleSortChange = (field : string, direction : string) => {
        let sortFunction;
        let mult = (direction === 'asc') ? 1 : -1;
        if(field === 'tracks') {
            sortFunction = (a : Playlist, b : Playlist) => mult * (a.tracksNum - b.tracksNum);
        } else {
            sortFunction = (a : Playlist, b : Playlist) => mult * a.name.localeCompare(b.name);
        }
        playlists.sort(sortFunction);
    };

    handleSortChange(sortField, sortDir);

    return <div>
        <h2>Select playlist</h2>
        <FormControl component="fieldset">
            <FormLabel component="legend">Sorting</FormLabel>
            <RadioGroup aria-label="sorting" name="gender1" value={sortField} onChange={handleSortingChange}>
                <FormControlLabel value="name" control={<Radio />} label="Name" />
                <FormControlLabel value="tracks" control={<Radio />} label="Tracks" />
            </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
            <FormLabel component="legend">Direction</FormLabel>
            <RadioGroup aria-label="direction" name="gender1" value={sortDir} onChange={handleSortDirChange}>
                <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
                <FormControlLabel value="desc" control={<Radio />} label="Descending" />
            </RadioGroup>
        </FormControl>
        <List component="nav" aria-label="playlists">
            {playlists.map(playlist => <ListItem button key={playlist.id} >
                <ListItemText primary={playlist.name} secondary={playlist.tracksNum} onClick={selectHandler.bind(null, playlist.id)} />
            </ListItem>)}
        </List>
    </div>
};
