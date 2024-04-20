export default function MergeButton({ isActive }){
    return(
        <button className={`${isActive ? "opacity-100 hover:bg-green-600" : "opacity-50"} bg-green-700 text-white my-8 uppercase font-semibold px-6 py-4 rounded-full`}>Merge</button>
    )
}   