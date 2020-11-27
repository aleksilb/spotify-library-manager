"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveArtistData = exports.getArtistDataFromDb = void 0;
require("../mock/artist_camille.json");
function getArtistDataFromDb(id) {
    return require("../mock/artist_camille.json");
}
exports.getArtistDataFromDb = getArtistDataFromDb;
function saveArtistData(artist) {
    console.log("Saving artist");
    console.info(artist);
}
exports.saveArtistData = saveArtistData;
//# sourceMappingURL=Database.js.map