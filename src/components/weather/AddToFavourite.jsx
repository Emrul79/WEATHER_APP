import React, { useContext, useEffect, useState } from "react";
import RedHeart from "../../assets/heart-red.svg";
import HeartImg from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";
export default function AddToFavourite() {
  const [IsFavourite, setIsFavourite] = useState(false);
  const { Favourites, AddToFavourite, RemoveFromFavourite } =
    useContext(FavouriteContext);
  const {
    weatherData: { location, latitude, longitude },
  } = useContext(WeatherContext);
  function handleISFavourite() {
    console.log(Favourites);
    let found = Favourites.find((item) => item.location === location);
    if (found) {
      RemoveFromFavourite(location);
      setIsFavourite(false);
    } else {
      AddToFavourite(latitude, longitude, location);
      setIsFavourite(true);
    }
  }

  useEffect(() => {
    const found = Favourites.find((item) => item.location === location);
    if (found) {
      setIsFavourite(found);
    }
  }, []);
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span onClick={handleISFavourite}>Add to Favourite</span>
          <img src={IsFavourite ? RedHeart : HeartImg} alt="HeartImg" />
        </button>
      </div>
    </div>
  );
}
