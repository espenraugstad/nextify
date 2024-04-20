export default function DeleteButton({ isActive }){
    return(
        <button className={`${isActive ? "opacity-100 hover:bg-red-600" : "opacity-50"} bg-red-700 text-white my-8 uppercase font-semibold px-6 py-4 rounded-full`}>Delete</button>
    )
}   