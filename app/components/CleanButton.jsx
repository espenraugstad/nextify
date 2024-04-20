export default function CleanButton({ isActive }){
    return(
        <button className={`${isActive ? "opacity-100 hover:bg-blue-600" : "opacity-50"} bg-blue-700 text-white my-8 uppercase font-semibold px-6 py-4 rounded-full`}>Clean</button>
    )
}   