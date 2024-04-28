import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchGetMovieReviews = (movie_id) => {
  return api.get(`/movie/${movie_id}/reviews`);
}

export const useMovieReviewsQuery = (movie_id) => {
  return useQuery({
    method: "GET",
    queryKey: ['movie-review'],
    queryFn: () => fetchGetMovieReviews(movie_id),
    select: (result) => result.data,
  })
}