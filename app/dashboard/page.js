"use client";
import NavBar from "../components/NavBar";
import UserProfile from "../components/UserProfile";
import { useState } from "react";
import Playlists from "../components/Playlists";
import MergeButton from "../components/MergeButton";
import DeleteButton from "../components/DeleteButton";
import CleanButton from "../components/CleanButton";

export default function Dashboard() {
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  return (
    <>
      <NavBar />
      <main className="pt-8">
        <h1 className="mb-8">Dashboard</h1>
        <section className="flex flex-col w-full mb-8 px-16">
          <section className="grid grid-cols-4 gap-8 w-full">
            <UserProfile token={localStorage.getItem("access_token")} />
            <div className="flex flex-col items-center justify-between shadow-lg bg-neutral-100 p-8">
              <h2>Merge</h2>
              <p>
                To merge playlists, select the playlists you want to merge. Then
                click the merge-button below to select a target playlist.
              </p>
              <MergeButton isActive={selectedPlaylists.length > 0 ? true : false} />
            </div>
            <div className="flex flex-col items-center justify-between shadow-lg bg-neutral-100 p-8">
              <h2>Delete</h2>
              <p>
                To delete playlists, select the ones you want to delete. Then click the delete button below to delete all selected playlists.
              </p>
              <DeleteButton isActive={selectedPlaylists.length > 0 ? true : false} />
            </div>
            <div className="flex flex-col items-center justify-between shadow-lg bg-neutral-100 p-8">
              <h2>Clean</h2>
              <p>
                To remove duplicates in a playlist, first select only one playlist. Then click the clean button below to remove duplicate songs from the selected playlists.
              </p>
              <CleanButton isActive={selectedPlaylists.length === 1 ? true : false} />
            </div>
          </section>
          <h2 className="mt-8 mx-0 px-0">Playlists</h2>
          <Playlists selectedPlaylists={selectedPlaylists} setSelectedPlaylists={setSelectedPlaylists}/>
        </section>
      </main>
    </>
  );
}
