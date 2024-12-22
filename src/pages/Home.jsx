import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { searchMovies,fetchPopularMovies } from "../services/api";
function Home(){

    const [searchQuery,setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        const fetchMovies = async ()=>{
            try {
                const data = await fetchPopularMovies(searchQuery);
                setMovies(data);
                setError(null);
            } catch (error) {
                setError(error);
                console.log("Error fetching popular movies:",error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    },[])

    const handleSearch = (e)=>{
        e.preventDefault()
        const fetchSearchedMovies = async () => {
            try {
                setLoading(true);
                const data = await searchMovies(searchQuery);
                setMovies(data);
            } catch (error) {
                setError(error);
                console.log("Error searching movies:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSearchedMovies();
    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies......."
                className="search-input"
                value={searchQuery}
                onChange={e=>setSearchQuery(e.target.value)}/>
            <button 
                type="submit" 
                className="search-button">Search
            </button>
        </form>
        {(loading && <div className="loading">Loading...</div>)}
        {(error && <div className="error-message">{error}</div>)}
        <div className="movies-grid">
            {movies.map(
                (movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id}/>
                )
            )}
        </div>
    </div>
}

export default Home;