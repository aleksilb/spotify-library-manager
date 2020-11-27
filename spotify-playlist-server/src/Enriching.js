"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichPlaylist = exports.enrichArtist = void 0;
var db = require("./Database");
var matching = require("./Matching");
function enrichArtist(artist) {
    var enrichedArtist = db.getArtistDataFromDb(artist.id);
    if (enrichedArtist == null) {
        enrichedArtist = matching.searchArtistData(artist);
        db.saveArtistData(enrichedArtist);
    }
    Object.assign(artist, enrichedArtist);
    return artist;
}
exports.enrichArtist = enrichArtist;
function enrichPlaylist(playlist) {
    playlist.tracks.forEach(function (track) { track.artists.forEach(enrichArtist); });
    return playlist;
}
exports.enrichPlaylist = enrichPlaylist;
//# sourceMappingURL=Enriching.js.map