import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";

function Home(){
    const {data: movies, isloading} = useMovies()

    if(isloading){
        return <p>loading.............</p>
    }

    return(
        <>
        <div>
        {movies.map(movie=>(
            <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
            
        </>
    )
}

export default Home