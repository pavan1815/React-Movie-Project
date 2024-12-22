import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css"


function MovieCard({movie}){
    const {addFavorite,removeFavorite,isFavorite} = useMovieContext();
    const favorite = isFavorite(movie);
    function onFavoriteClick(e){
        e.preventDefault();
        if(favorite){
            removeFavorite(movie);
        }else{
            addFavorite(movie);
        }    
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
            <div className="movie-info">
                {movie.title && <h3>{movie.title}</h3>}
                {movie.release_date && <p>{movie.release_date.split("-")[0]}</p>}
            </div>
        </div>
    </div>
}

export default MovieCard;