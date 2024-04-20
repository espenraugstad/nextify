async function fetchPlaylists() {
    let offset = 0;
    let playlists = [];
    let url = `https://api.spotify.com/v1/me/playlists?offset=${offset}&limit=50`;

    const cfg = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
    };

    do{
        try {
            let res = await fetch(url, cfg);
            
            if (res.status === 200) {
                let data = await res.json();
                url = data.next;
                playlists = playlists.concat(data.items);
                //return data;
            }
    
        } catch (err) {
            console.log(err);
        }
    } while(url);
    return playlists;
    
}

export { fetchPlaylists };