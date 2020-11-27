"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Album_1 = require("./Album");
var Artist_1 = require("./Artist");
var Track = /** @class */ (function () {
    function Track(id, name, album, artists, country) {
        if (country === void 0) { country = ""; }
        this.id = id;
        this.name = name;
        this.album = album;
        this.artists = artists;
        this.country = country;
    }
    Track.createFromSpotify = function (spotifyTrack) {
        var album = Album_1.default.createFromSpotify(spotifyTrack.album);
        var artists = [];
        spotifyTrack.artists.map(function (artist) {
            artists.push(Artist_1.default.createFromSpotify(artist));
        });
        return new Track(spotifyTrack.id, spotifyTrack.name, album, artists, "");
    };
    return Track;
}());
exports.default = Track;
//# sourceMappingURL=Track.js.map