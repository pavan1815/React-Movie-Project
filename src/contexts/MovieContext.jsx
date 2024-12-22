import { createContext,useState,useContext,useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = ()=>useContext(MovieContext);

export const MovieProvider = ({children})=>{
    const [favorites,setFavorites] = useState(() => {
        const data = localStorage.getItem("favorites");
        return data ? JSON.parse(data) : [];
    });

    useEffect(()=>{
        let data = localStorage.getItem("favorites");
        console.log("retrieved data:",data);
        if(data){
            console.log("data:",JSON.parse(data));  
            data = JSON.parse(data);
            setFavorites(data);
            console.log("favorites first :",favorites);
        }
    },[])

    useEffect(()=>{
        console.log("favorites:",favorites);
        localStorage.setItem("favorites",JSON.stringify(favorites));
    },[favorites])

    const addFavorite = (movie)=>{
        setFavorites([...favorites,movie]);
    }

    const removeFavorite = (movie)=>{
        setFavorites(favorites.filter((fav)=>fav.id!==movie.id));
    }

    const isFavorite = (movie)=>{
        return favorites.some((fav)=>fav.id===movie.id);
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
        </MovieContext.Provider>
}