"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Artist = /** @class */ (function () {
    function Artist(id, name) {
        this.id = id;
        this.name = name;
    }
    Artist.createFromSpotify = function (spotifyArtist) {
        return new Artist(spotifyArtist.id, spotifyArtist.name);
    };
    return Artist;
}());
exports.default = Artist;
//# sourceMappingURL=Artist.js.map