import {Album, Artist, Track} from './model/interfaces';
import {MusicBrainz} from "./service/MusicBrainz";
import * as Mapping from "./Mapping";
import * as LastFm from "./service/LastFm";
import {AlbumContext, ArtistContext, TrackContext} from "./model/context";

const MUSIC_BRAINZ_ENABLED = false;

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

export async function getArtist(context: ArtistContext): Promise<Artist> {
    if(MUSIC_BRAINZ_ENABLED) {
        let mbArtist = await MusicBrainz.searchArtist(context.spotifyArtist);
        context.musicBrainzArtist = mbArtist;
    }
    return Mapping.createArtist(context);
}
