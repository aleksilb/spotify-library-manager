"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchArtistData = void 0;
function searchArtistData(artist) {
    var mb_artist = require("../mock/music_brainz/artist_camille.json");
    artist.country = mb_artist.country;
    return artist;
}
exports.searchArtistData = searchArtistData;
//# sourceMappingURL=Matching.js.map