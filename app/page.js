"use client";
import { getToken } from "./scripts/token.js";
import LoginButton from "./components/LoginButton";
import NavBar from "./components/NavBar";

export default function Home() {
  window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    if (code) {
      await getToken(code);
      if (localStorage.getItem("access_token")) {
        window.location.href = "/dashboard";
      }
    }
  };

  return (
    <>
      <NavBar />
      <main className="pt-8 md:pt-0 md:justify-center text-center ">
        <h1>Welcome</h1>
        <p className="pt-4">
          Merge, create, clean and populate multiple playlists at once.{" "}
        </p>
        <LoginButton />
      </main>
    </>
  );
}
