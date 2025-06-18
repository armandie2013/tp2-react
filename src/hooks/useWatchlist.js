import { useEffect, useState } from "react";

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  // lee los datos del localStorage que tengan la clave watchlist //
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  }, []);

  // agrega un pelicula y actualiza el localStorage //
  const addToWatchlist = (movie) => {
    const updated = [...watchlist, movie];
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  // remueve una pelicula de la lista //
  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
};