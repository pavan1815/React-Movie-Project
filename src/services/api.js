const  API_KEY = "2ff879bde7e684cd3923f70ecdc5ad92";
const  API_URL = "https://api.themoviedb.org/3";
export const fetchPopularMovies = async () => {
    try {
        const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
    }
};