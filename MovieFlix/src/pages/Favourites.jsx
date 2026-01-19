import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";

function Favorites(){
    const {data: movies, isloading} = useMovies()

     if(isloading){
        return <p>loading.............</p>
    }

    const favorites = movies.filter(movie=> movie.isFavorite)

    return(
        <div>
            <h3>{favorites.length} movies in your favorites</h3>
            {favorites.length ===0 && <p>No favouries yet here.....</p>}

            <div>
                {favorites.map(movie =>(
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Favorites