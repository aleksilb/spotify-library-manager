import Playlist from "../model/Playlist";

export function getUserPlaylists(mockUser: string) : Playlist[] {
    return [
        {
            'id' : 'playlist-id-1',
            'name' : 'Playlist 1 name'
        },
        {
            'id' : 'playlist-id-2',
            'name' : 'Playlist 2 name'
        }
    ]
}

export function getPlaylist(id : string) : Promise<Playlist> {
    return fetch("http://localhost:3001/playlist/0hXzW43N9IsskVZW6WlobW")
        .then(res => res.json());
}
