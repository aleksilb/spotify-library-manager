import {Album, Artist, Track} from './model/interfaces';
import {MusicBrainz} from "./service/MusicBrainz";
import * as Mapping from "./Mapping";
import {AlbumContext, ArtistContext, TrackContext} from "./model/context";

export function getAlbum(context : AlbumContext) : Album {
    return Mapping.createAlbum(context);
}

export function getTrack(context : TrackContext) : Promise<Track> {
    return new Promise((resolve) => resolve(Mapping.createTrack(context)));
}

export function getArtist(context : ArtistContext) : Promise<Artist> {
    return MusicBrainz.searchArtist(context.spotifyArtist).then(mbArtist => {
        context.musicBrainzArtist = mbArtist;
        return Mapping.createArtist(context);
    })
}
