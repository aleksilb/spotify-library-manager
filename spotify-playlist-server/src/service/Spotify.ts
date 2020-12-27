import * as SpotifyModel from "../model/interfaces/spotify";
import {response} from "express";
const fetch = require('node-fetch');

class Spotify {
    private static token : Promise<string>;
    private static clientId: string = '5be0cbaaf98842f8bd292fca6a502b81';
    private static clientSecret: string = '6818277bd0c44514bd8e75fcbdcb18f3';

    static fetchToken() : Promise<string> {
        return fetch('https://accounts.spotify.com/api/token', {
            method : 'POST',
            body : new URLSearchParams({
                'grant_type': 'client_credentials'
            }),
            headers : {'authorization' : 'Basic ' + Buffer.from(this.clientId + ":" + this.clientSecret).toString('base64')}
        })
            .then(response =>
                response.json())
            .then(
                response => response.access_token);
    }

    static getToken() : Promise<string> {
        if(this.token == null) {
            this.token = this.fetchToken();
        }
        return this.token;
    }

    static getUserPlaylists(authorization : string) : Promise<SpotifyModel.Playlist[]> {
        return fetch('https://api.spotify.com/v1/me/playlists', {
            headers : {'authorization' : authorization}
        })
        .then(response =>
            response.json())
        .then(response =>
            response.items);
    }

    static getPlaylist(id : string) : Promise<SpotifyModel.Playlist> {
        return this.getToken().then(token => {
            return fetch('https://api.spotify.com/v1/playlists/' + id, {
                headers : {'authorization' : 'Bearer ' + token}
            }).then(response => response.json());
        })
    }
}

export default Spotify;
