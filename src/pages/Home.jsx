import { useState } from "react";
import MovieList from "../components/MovieList";
import WatchlistModal from "../components/WatchlistModal";
import { useWatchlist } from "../hooks/useWatchlist";
import { movies } from "../data/movies";

const Home = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist, removeOnWa } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);




  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Peliculas</h1>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Ver mi lista
        </button>
      </header>

      <MovieList movies={movies} onAdd={addToWatchlist} />

      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemove={removeFromWatchlist}
          removeOnWa={removeOnWa}
        />
      )}
    </div>
  );
};

export default Home;
