import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchTrendingMovies = () => {
  return api.get(`/trending/movie/week?watch_region=KR&language=ko`);
};

export const useTrendingMovieQuery = () => {
  return useQuery({
    method: 'GET',
    queryKey: ['upcoming-movie'],
    queryFn: fetchTrendingMovies,
    select: (result) => result.data
  });
};