import Artist from "./model/Artist";
import * as SpotifyModel from "./model/interfaces/spotify";
import * as MusicBrainz from "./service/MusicBrainz";
import * as Mapping from "./Mapping";
import Track from "./model/Track";
import Album from "./model/Album";

export function getAlbum(spotifyAlbum: SpotifyModel.Album) : Album {
    return Mapping.createAlbum(spotifyAlbum);
}

export function getTrack(spotifyTrack : SpotifyModel.Track, artist : Artist) : Track {
    return Mapping.createTrack(spotifyTrack, artist);
}

export function getArtist(spotifyArtist : SpotifyModel.Artist) : Artist {
    let mbArtist = MusicBrainz.searchArtist(spotifyArtist);
    return Mapping.createArtist(spotifyArtist, mbArtist);
}
