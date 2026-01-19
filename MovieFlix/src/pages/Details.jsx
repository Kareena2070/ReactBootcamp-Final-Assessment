import { useParams } from "react-router-dom";
import { useMovie,useFavoriteMovie } from "../hooks/useMovies";

function Details(){
    const {id} = useParams()
    const navigate = useNavigate()
    const {data: movie, isloading} = useMovie(id)
    const favoriteMovie = useFavoriteMovie()

    if(isloading){
        return <p>Loading..........</p>
    }

    return(
        <div>
            <img src={movie.posterUrl} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>Gener: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>

            <button
            onClick={()=>
                favoriteMovie.mutate({
                    id: movie.id,
                    isFavorite: !movie.isFavorite,
                })
            }
            >{movie.isFavorite ? "Remove Favorite": "Add Favorite"}</button>

        </div>
    )
}

export default Details