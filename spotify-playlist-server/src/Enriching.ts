import Artist from "./model/Artist";
import * as db from "./Database";
import * as matching from "./Matching";
import * as Mapping from  "./Mapping"
import Playlist from "./model/Playlist";

export function enrichArtist(artist : Artist) : Artist {
    let enrichedArtist = db.getArtistDataFromDb(artist.id);
    if(enrichedArtist == null) {
        enrichedArtist = matching.searchArtistData(artist.name);
        db.saveArtistData(enrichedArtist);
    }
    Mapping.mapExtraDataToArtist(artist, enrichedArtist);
    return artist;
}

export function enrichPlaylist(playlist: Playlist) : Playlist {
    playlist.tracks.forEach(track => {track.artists.forEach(enrichArtist)});
    return playlist;
}