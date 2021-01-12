import {TrackContext} from "../model/context";
const fetch = require('node-fetch');

const apiKey = 'b89e9ec47e543b6b47adeef5a0341118';

export function searchTrack(context : TrackContext) : Promise<lastFm.Track> {
    return fetch("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+apiKey+"&artist="+context.artists[0].name+"&track="+context.spotifyTrack.name+"&format=json&user=pipo9")
        .then(response =>
            response.json())
        .then(response =>
            response.track)
        .catch(error => {
            console.error("Failed to fetch track " + context.spotifyTrack.name + " from last.fm with error: " + error);
        });
}
