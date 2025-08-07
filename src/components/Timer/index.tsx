"use client";
import { useState } from "react";
import Header from "../Header";
import Clock from "./Clock";
import List from "./List";

const backgrounds = [
  "DUNE.jpg",
  "GAMES OF THRONES.jpg",
  "LORD OF THE RINGS.jpg",
  "STAR WARS.jpg",
];

function formatName(filename: string) {
  return (
    filename
      .replace(/\.jpg$/i, "") // remove old extension
      .toLowerCase()
      .split(" ")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") + ""
  );
}

const Timer = () => {
  const [bg] = useState(
    () => backgrounds[Math.floor(Math.random() * backgrounds.length)]
  );

  return (
    <div className="relative grid gap-8 move-up-500 overflow-hidden">
      <div>
        <Header />
        <div className="relative mx-8 rounded-xl grid gap-8 overflow-hidden">
          <div
            className="absolute flex items-end justify-end overflow-hidden z-10 w-full h-56 bg-cover bg-center bg-no-repeat rounded-xl transition duration-300 ease-in"
            style={{
              backgroundImage: `url('/backgrounds/${bg}')`,
            }}
          >
            <span className="bg-woodsmoke-950/50 text-woodsmoke-300 text-sm px-2 py-1 rounded m-2">
              {formatName(bg)}
            </span>
          </div>
          <div className="z-50 pt-40">
            <Clock />
          </div>
        </div>
      </div>
      <div className="container max-w-[600px] mx-auto">
        <List />
      </div>
    </div>
  );
};

export default Timer;
