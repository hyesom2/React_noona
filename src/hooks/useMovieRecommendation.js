import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const MovieRecommendation = () => {
  return api.get(`/movie/940551/recommendations?watch_region=KR&language=ko`);
}

export const useMovieRecommendationQuery = () => {
  return useQuery({
    method: "GET",
    queryKey: ['movie-recommendation'],
    queryFn: MovieRecommendation,
    select: (result) => result.data,
  })
}