"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveArtistData = exports.getArtistDataFromDb = void 0;
require("../mock/artist_camille.json");
function getArtistDataFromDb(id) {
    if (id === "0gOsZcHl7H3ewXVIEnWFZX") {
        return require("../mock/artist_camille.json");
    }
    else
        return null;
}
exports.getArtistDataFromDb = getArtistDataFromDb;
function saveArtistData(artist) {
    console.log("Saving artist");
    console.info(artist);
}
exports.saveArtistData = saveArtistData;
//# sourceMappingURL=Database.js.map