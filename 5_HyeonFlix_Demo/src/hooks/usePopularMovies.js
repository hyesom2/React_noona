import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
  return api.get(`/movie/popular?watch_region=KR&language=ko`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    method: 'GET',
    queryKey: ['movie-popular'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};