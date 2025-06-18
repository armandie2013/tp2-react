import { useState } from "react";
import MovieList from "../components/MovieList";
import WatchlistModal from "../components/WatchlistModal";
import { useWatchlist } from "../hooks/useWatchlist";
import { movies } from "../data/movies";

const Home = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Películas</h1>
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
        />
      )}
    </div>
  );
};

export default Home;
