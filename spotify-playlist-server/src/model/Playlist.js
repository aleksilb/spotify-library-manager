"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Playlist = /** @class */ (function () {
    function Playlist(id, name, tracks) {
        if (tracks === void 0) { tracks = []; }
        this.id = id;
        this.name = name;
        this.tracks = tracks;
    }
    return Playlist;
}());
exports.default = Playlist;
//# sourceMappingURL=Playlist.js.map