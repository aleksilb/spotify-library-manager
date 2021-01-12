import {Album, Artist, Track} from './model/interfaces';
import {MusicBrainz} from "./service/MusicBrainz";
import * as Mapping from "./Mapping";
import * as LastFm from "./service/LastFm";
import {AlbumContext, ArtistContext, TrackContext} from "./model/context";

export function getAlbum(context: AlbumContext): Promise<Album> {
    return Promise.resolve(Mapping.createAlbum(context));
}

export function getTrack(context: TrackContext): Promise<Track> {
    return LastFm.searchTrack(context)
        .then(lfTrack => {
            context.lastFmTrack = lfTrack;
            return Mapping.createTrack(context);
        });
}

export function getArtist(context: ArtistContext): Promise<Artist> {
    return MusicBrainz.searchArtist(context.spotifyArtist)
        .then(mbArtist => {
            context.musicBrainzArtist = mbArtist;
            return Mapping.createArtist(context);
        });
}
