import { useState, useEffect } from "react";
import Playlist from "./Playlist";

export default function Playlists({ selectedPlaylists, setSelectedPlaylists }) {

    const [playlists, setPlaylists] = useState(null);

    async function fetchPlaylists(offset) {
        const url = `https://api.spotify.com/v1/me/playlists?offset=${offset}&limit=50`;

        const cfg = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        };

        try {
            let res = await fetch(url, cfg);
            
            if (res.status === 200) {
                let data = await res.json();
                setPlaylists(data);
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPlaylists(0);
    }, []);

    if (!playlists) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <div>Filters and search</div>
                <section className="overflow-y-auto rounded-md bg-neutral-100 shadow-lg mb-8">
                    {playlists.items.map(playlist => <Playlist key={playlist.id} id={playlist.id} src={playlist.images ? playlist.images[0].url : "https://placehold.co/400"} title={playlist.name} owner={playlist.owner.display_name} selectedPlaylists={selectedPlaylists} setSelectedPlaylists={setSelectedPlaylists}/>)}
                </section>
            </>

        )
    }
}