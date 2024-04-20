import { useState, useEffect } from "react";
import { fetchPlaylists } from "../scripts/lib/playlists.js";
import Playlist from "./Playlist";
import DeselectAllButton from "./DeselectAllButton.jsx";


export default function Playlists({ selectedPlaylists, setSelectedPlaylists }) {

    const [playlists, setPlaylists] = useState(null);
    const [displayedPlaylists, setDisplayedPlaylists] = useState(null);

    function deselectAll() {
        setSelectedPlaylists([]);
        document.getElementById("showSelected").checked = false;
        displayPlaylists();
    }

    function displayPlaylists() {
            let showSelected = document.getElementById("showSelected");
        let searchBox = document.getElementById("searchPlaylists");

        // Show selection without search 
        if (showSelected.checked && searchBox.value === "") {
            // Filter displayedPlaylists with id of those contained in array selectedPlaylists
            let results = playlists.filter(playlist => selectedPlaylists.includes(playlist.id));
            setDisplayedPlaylists(results);
            return;
        }

        // Show all without search 
        if (!showSelected.checked && searchBox.value === "") {
            setDisplayedPlaylists(playlists);
            return;
        }

        // Show searched without selected
        if (!showSelected.checked && searchBox.value !== "") {
            let searchTerm = searchBox.value;
            let results = playlists.filter(playlist => playlist.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || playlist.owner.display_name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
            setDisplayedPlaylists(results);
            return;
        }

        // Show searched while selected
        if (showSelected.checked && searchBox.value !== "") {

            // 1. Start by getting all selected playlists to search
            let playlistsToSearch = playlists.filter(playlist => selectedPlaylists.includes(playlist.id));

            // 2. Search the new array
            let searchTerm = searchBox.value;
            let results = playlistsToSearch.filter(playlist => playlist.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || playlist.owner.display_name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
            setDisplayedPlaylists(results);
            return;
        }
    }

    async function loadPlaylists() {
        let loadedPlaylists = await fetchPlaylists();
        setPlaylists(loadedPlaylists);
        setDisplayedPlaylists(loadedPlaylists);
    }

    useEffect(() => {
        loadPlaylists();
    }, []);

    if (!playlists) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <div className="my-4">Filters and search</div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div>
                            <label htmlFor="searchPlaylists">Search playlists</label>
                            <input onChange={displayPlaylists} type="text" name="" id="searchPlaylists" className="ml-2 px-4 border border-black rounded-full" />
                        </div>
                        <div className="mr-2 ml-4">
                            <span>{selectedPlaylists.length}</span> playlists selected.
                        </div>
                        <div className="ml-2">
                            <label className="mr-2" htmlFor="showSelected">Show selected playlists</label>
                            <input onInput={displayPlaylists} type="checkbox" name="" id="showSelected" />
                        </div>
                    </div>

                    <DeselectAllButton deselectAll={deselectAll} />
                </div>
                <section className="overflow-y-auto rounded-md bg-neutral-200 shadow-lg my-8 border-2 border-neutral-200">
                    {displayedPlaylists.map(playlist => <Playlist key={playlist.id} id={playlist.id} src={playlist.images ? playlist.images[0].url : "https://placehold.co/400"} title={playlist.name} owner={playlist.owner.display_name} selectedPlaylists={selectedPlaylists} setSelectedPlaylists={setSelectedPlaylists} />)}
                </section>
            </>

        )
    }
}