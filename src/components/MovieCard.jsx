const MovieCard = ({ movie, onAdd }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center">
    <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover rounded" />
    <h3 className="mt-2 font-bold">{movie.title}</h3>
    <button
      className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
      onClick={() => onAdd(movie)}
    >
      Agregar a mi lista
    </button>
  </div>
);

export default MovieCard;