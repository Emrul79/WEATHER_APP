import React, { useContext, useState } from "react";
import HeartIcon from "../assets/heart.svg";
import { FavouriteContext } from "../context";

export default function FavouriteMOdal() {
  const [isOpen, setIsOpen] = useState(false);
  const { isFavourite, AddToFavourite, RemoveFromFavourite } =
    useContext(FavouriteContext);
  console.log(isFavourite);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      >
        <img src={HeartIcon} alt="" />
        <span>Favourite Locations here</span>
      </div>
      {isOpen && (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
          <h3 className="text-lg font-bold px-4">Favourite Locations</h3>

          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
            {isFavourite?.map((item, index) => (
              <li
                key={index}
                onClick={() => RemoveFromFavourite(item.location)}
                className="hover:bg-gray-200"
              >
                {item.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
