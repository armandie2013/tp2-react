const WatchlistModal = ({ watchlist, onClose, onRemove }) => (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Mi lista de reproducción</h2>
      {watchlist.length === 0 ? (
        <p>No hay películas guardadas.</p>
      ) : (
        <ul className="space-y-2">
          {watchlist.map((movie) => (
            <li key={movie.id} className="flex justify-between items-center">
              <span>{movie.title}</span>
              <div>
                <img src={movie.image} alt="" />
              </div>
              <button className="text-red-600" onClick={() => onRemove(movie.id)}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onClose} className="mt-4 bg-gray-600 text-white px-4 py-2 rounded">
        Cerrar
      </button>
    </div>
  </div>
);

export default WatchlistModal;