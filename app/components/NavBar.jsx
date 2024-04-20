export default function NavBar() {

    const logout = () => {
        localStorage.clear();
        location.href="/";
    }

    return (
        <>
            <nav className="max-w-[1400px] w-full px-8 sm:px-24 h-20 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">Stratify</a>
                <div>
                    <ul className="flex">
                        <li className="mx-4 font-medium"><a href="">About</a></li>
                        <li className="mx-4 font-medium cursor-pointer" onClick={logout}> Logout</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}