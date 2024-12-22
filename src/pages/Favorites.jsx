import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css"
import MovieCard from "../components/MovieCard";
function Favorites(){
    const {favorites} = useMovieContext();
    return favorites.length>0 ? (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map(
                    (fav) => <MovieCard movie={fav} key={fav.id}/>
                )}
            </div>
        </div>) : (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to Favorites and they will appear here </p>
        </div>)
}

export default Favorites;