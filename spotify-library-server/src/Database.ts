import {Album, Artist, Track} from './model/interfaces';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, set, get } from "firebase/database";
import '../mock/artist_camille.json';

const firebaseConfig = {
    apiKey: "AIzaSyDbvTbX5JRyTiRyxE95pf7MzRhYVCdcgas",
    authDomain: "spotify-library-273ce.firebaseapp.com",
    databaseURL: "https://spotify-library-273ce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "spotify-library-273ce",
    storageBucket: "spotify-library-273ce.appspot.com",
    messagingSenderId: "467277957073",
    appId: "1:467277957073:web:02d1223ba4309e3be2c2f0",
    measurementId: "G-DQLRYZPCQB"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function saveAlbum(albumPromise: Promise<Album>) {
    albumPromise.then(album => {
        console.log("Saving album " + album.name);
        saveInDatabase('album/' + album.id, album);
    })
}

export function getAlbum(id: string) : Promise<Album> {
    if(id === "18LlCAG2iY8ht0dm7uKBy0") {
        return Promise.resolve(require('../mock/album_oui.json'));
    } else {
        return getFromDatabase('album/'+id);
    }
}


export function getTrack(id : string) : Promise<Track> {
    if(id === "26tVbVkCppuEgNSQRnIu1c") {
        return Promise.resolve(require('../mock/track_sous_le_sable.json'));
    } else {
        return getFromDatabase('track/'+id);
    }
}

export function saveTrack(trackPromise : Promise<Track>) {
    trackPromise.then(track => {
        console.log("Saving track " + track.name);
        saveInDatabase('track/' + track.id, track);
    });
}

export function getArtist(id : string) : Promise<Artist> {
    if(id === "56ZTgzPBDge0OvCGgMO3OY") {
        return Promise.resolve(require("../mock/artist_beach_house.json"));
    } else {
        return getFromDatabase('artist/'+id);
    }
}

export function saveArtist(artistPromise : Promise<Artist>) {
    artistPromise.then(artist => {
        console.log("Saving artist " + artist.name);
        saveInDatabase('artist/' + artist.id, artist);
    });
}

function getFromDatabase(path: string) : Promise<any> {
    return get(child(ref(database), path))
        .then(snapshot => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                return null;
            }
        });
}

function saveInDatabase(path: string, object: any) {
    const formattedObject = JSON.parse( JSON.stringify(object));
    set(ref(database, path), formattedObject);
}
