import React, {useEffect, useState} from 'react';
import PlaylistApp from "./PlaylistApp";
import queryString from 'query-string';
import Login from "./Login";

function App() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        let queryParams = queryString.parse(window.location.hash);
        let accessToken = queryParams.access_token;
        if(accessToken != null) {
            if(accessToken instanceof Array) {
                accessToken = accessToken[0];
            }
            console.log(accessToken);
            setToken(accessToken);
        }
    }, []);

    return <div className="App">
        {token == null ?
            <Login /> :
            <PlaylistApp token={token}/>
        }
    </div>;
}

export default App;
