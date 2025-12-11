import React from "react";
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

export default function FavouriteProvider({ children }) {
  const [Favourites, setIsFavourite] = useLocalStorage("favourite", []);

  function AddToFavourite(latitude, longitude, location) {
    setIsFavourite([
      ...Favourites,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  }
  function RemoveFromFavourite(location) {
    const filteredFavourite = Favourites.filter(
      (favourite) => favourite.location !== location
    );
    setIsFavourite(filteredFavourite);
  }
  return (
    <FavouriteContext.Provider
      value={{ Favourites, AddToFavourite, RemoveFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
