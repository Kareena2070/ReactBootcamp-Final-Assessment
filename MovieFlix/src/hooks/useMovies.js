import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import api from "../services/api"

export const useMovies = ()=>{
    return useQuery({
        queryKey:["movies"],
        queryFn: async()=>{
            const res = await api.get("/movies");
            return res.data.data
        }
    })
}

export const useMovie = (id)=>{
    return useQuery({
        queryKey: ["movie", id],
        queryFn: async()=>{
            const res = await api.get(`/movies/${id}`)
            return res.data.data
        }
    })
}

export const useFavoriteMovie = ()=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({id, isFavorite})=> api.put(`/movies/${id}/favorite`, {isFavorite}),
        onSuccess: ()=>{
            queryClient.invalidateQueries(["movies"])
        }
    })
}