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


export function getPlaylist(id : string) : Playlist {
    return {
        'id':'playlist-id',
        'name':'playlist name',
        'tracks' : [
            {
                'id':'track-id',
                'name':'Track name',
                'country':'Track country',
                'album' : {
                    'id' : 'album-id',
                    'name' : 'Album name'
                },
                'artists' : [
                    {
                        'id' : 'artist-id',
                        'name' : 'Artist name',
                        'type' : 'Artist type',
                        'country' : 'Artist country'
                    }
                ]
            }
        ]
    };
}
