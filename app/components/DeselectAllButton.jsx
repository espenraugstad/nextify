export default function DeselectAllButton({ deselectAll }){
    return(
        <button onClick={deselectAll} className="mx-4 hover:bg-green-600 bg-green-700 text-white uppercase font-semibold px-6 py-4 rounded-full">Deselect all</button>
    )
}