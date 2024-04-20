import { useState, useEffect } from "react";


export default function UserProfile({ token }) {
    const [userData, setUserData] = useState(null);

    async function fetchUserData() {
        const url = "https://api.spotify.com/v1/me";

        const cfg = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        };
        try {
            let response = await fetch(url, cfg);
            if (response.status === 200) {
                let data = await response.json();
                setUserData(data);
            }
        } catch (err) {
            console.log("Error getting user");
            console.error(err);
        }

    }

    useEffect(() => {
        fetchUserData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>
    } else {
        return (
            <section className="shadow-lg bg-neutral-100 flex flex-col p-8 items-center text-center rounded-md">
                <img src={userData.images[1].url} alt="User profile picture"
                    className="w-40 h-40 rounded-full" />
                <h2 className="">{userData.display_name}</h2>
            </section>
        )
    }

}