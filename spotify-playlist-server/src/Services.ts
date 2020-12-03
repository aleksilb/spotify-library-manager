import Artist from "./model/Artist";
import * as MusicBrainz from "./service/MusicBrainz";
import * as Mapping from "./Mapping";
import Track from "./model/Track";
import Album from "./model/Album";
import {AlbumContext, ArtistContext, TrackContext} from "./model/interfaces/context";

export function getAlbum(context : AlbumContext) : Album {
    return Mapping.createAlbum(context);
}

export function getTrack(context : TrackContext) : Track {
    return Mapping.createTrack(context);
}

export function getArtist(context : ArtistContext) : Artist {
    context.musicBrainzArtist = MusicBrainz.searchArtist(context.spotifyArtist);
    return Mapping.createArtist(context);
}
