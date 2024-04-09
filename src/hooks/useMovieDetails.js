import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieDetails = (movie_id) => {
  return api.get(`/movie/${movie_id}?watch_region=KR&language=ko`);
};

export const useMovieDetailQuery = (id) => {
  return useQuery({
    method: 'GET',
    queryKey: ['movie-details'],
    queryFn: () => fetchMovieDetails(id),
    select: (result) => result.data
  });
};