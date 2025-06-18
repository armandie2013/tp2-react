import { div } from "framer-motion/client";

const WatchlistModal = ({ watchlist, onClose, onRemove }) => (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Mi lista de reproducción</h2>
      {watchlist.length === 0 ? (
        <p>No hay peliculas guardadas.</p>
      ) : (
        <ul className="space-y-2">
          {/* render de cada pelicula */}
          {watchlist.map((movie) => (
            <div className="grow">
              <li
                key={movie.id}
                className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded"
              >
                <div>
                  <img
                    src={movie.image}
                    alt="No hay imagen disponible"
                    className="w-12 h-16 object-cover rounded"
                  />
                </div>

                <span className="flex-grow text-sm font-medium text-gray-800">
                  {movie.title}
                </span>

                <button
                  className="text-red-600 text-sm hover:underline"
                  onClick={() => onRemove(movie.id)}
                >
                  Quitar
                </button>
              </li>
            </div>
          ))}
        </ul>
      )}
      <button
        onClick={onClose}
        className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
      >
        Cerrar
      </button>
    </div>
  </div>
);

export default WatchlistModal;
