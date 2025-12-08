import React from "react";
import HeartIcon from "../assets/heart.svg";
import FavouriteMOdal from "./FavouriteMOdal";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
//cntrol+shift+l= to select all the same class name
export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <SearchBox />
          <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={HeartIcon} alt="" />
            <span>Favourite Locations here</span>
          </div>
          <FavouriteMOdal />
        </div>
      </nav>
    </header>
  );
}
