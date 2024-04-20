    export default function Playlist({id, src, title, owner, selectedPlaylists, setSelectedPlaylists }){

    let isSelected = false;

    if(selectedPlaylists.indexOf(id) !== -1){
        isSelected = true;
    }

    const handleClick = ()=>{
        // Update state
        if(selectedPlaylists.indexOf(id) !== -1){
            // Remove the selected
            setSelectedPlaylists(selectedPlaylists.filter(playlist => playlist !== id));
            
        } else {
            // Add the selected
            setSelectedPlaylists([...selectedPlaylists, id]);
        }
            isSelected = !isSelected;
    }

    return (
        <div className={`flex p-2 cursor-pointer  ${isSelected ?  "bg-green-400 hover:bg-green-600" : "bg-white hover:bg-neutral-200"}`} onClick={handleClick}>
            <img src={src} alt="" className="w-14 mr-2 rounded-sm"/>
            <div className="flex flex-col h-14 justify-center">
                <h3>{title}</h3>
                <p className="text-sm font-light">{owner}</p>
            </div>
        </div>
    )
}