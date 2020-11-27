"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Album = /** @class */ (function () {
    function Album(id, name) {
        this.id = id;
        this.name = name;
    }
    Album.createFromSpotify = function (album) {
        return new Album(album.id, album.name);
    };
    return Album;
}());
exports.default = Album;
//# sourceMappingURL=Album.js.map