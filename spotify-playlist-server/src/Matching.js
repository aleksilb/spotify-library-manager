"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchArtistData = void 0;
var Artist_1 = require("./model/Artist");
function searchArtistData(name) {
    var artistData = new Artist_1.default(null, null);
    if (name === "Camille") {
        var mbArtist = require("../mock/music_brainz/artist_camille.json");
        artistData.country = mbArtist.country;
    }
    return artistData;
}
exports.searchArtistData = searchArtistData;
//# sourceMappingURL=Matching.js.map