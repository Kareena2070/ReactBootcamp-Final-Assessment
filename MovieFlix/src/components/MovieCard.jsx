import { useNavigate } from "react-router-dom";

import { useFavoriteMovie } from "../hooks/useMovies";


function MovieCard({movie}){

    const navigate = useNavigate()
    const favoriteMovies = useFavoriteMovie()

    const favourieHandles = ()=>{
        favoriteMovies.mutate({
            id: movie.id,
            isFavorite: !movie.isFavorite,
        })
    }

    return(
        <>
            <img src={movie.posterUrl} alt={movie.title} 
            onClick={()=> navigate(`/movie/${movie.id}`)} />

            <h3>{movie.title}</h3>
            <p>{movie.genre} - {movie.releaseYear}</p>
            <p>Rating - {movie.rating}</p>

            <button onClick={favourieHandles}>{movie.isFavorite? "Remove Favorite": "Add Favorite"}</button>
        </>
    )
}

export default MovieCard