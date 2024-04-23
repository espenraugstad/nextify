"use client";

export default function MergeButton({ isActive, selectedPlaylists, isMerging, setIsMerging }){

    let btnText = !isMerging ? "Merge" : "Cancel merge";

    const handleMerge = async () => {
        console.log(selectedPlaylists);
        let res = await fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
        console.log(res);

        

        setIsMerging(!isMerging);
        
    }

    return(
        <button onClick={handleMerge} className={`${isActive ? "opacity-100 hover:bg-green-600" : "opacity-50"} bg-green-700 text-white my-8 uppercase font-semibold px-6 py-4 rounded-full`}>{btnText}</button>
    )
}   