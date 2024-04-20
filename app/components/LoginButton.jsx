"use client";

import generateRandomString from "../scripts/utilities/randomString.js";
import sha256 from "../scripts/utilities/sha256.js";
import base64encode from "../scripts/utilities/b64.js";
import { clientId, redirectUri } from "../scripts/utilities/constants";

export default function LoginButton() {
    const handleLogin = async () => {
        const scope =
            "playlist-read-collaborative playlist-read-private playlist-modify-private playlist-modify-public user-read-private user-read-email";
        const authUrl = new URL("https://accounts.spotify.com/authorize");

        const codeVerifier = generateRandomString(64);
        console.log(codeVerifier);
        const hashed = await sha256(codeVerifier);
        const codeChallenge = await base64encode(hashed);
        window.localStorage.setItem("code_verifier", codeVerifier);

        const params = {
            response_type: "code",
            client_id: clientId,
            scope,
            code_challenge_method: "S256",
            code_challenge: codeChallenge,
            redirect_uri: redirectUri,
        };

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
    }

    return (
        <button className="bg-green-700 text-white my-8 uppercase font-semibold px-6 py-4 rounded-full" onClick={handleLogin}>Login with Spotify</button>
    )
}