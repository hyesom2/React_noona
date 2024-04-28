import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcomingMovies = () => {
  return api.get(`/movie/upcoming?watch_region=KR&language=ko`);
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    method: 'GET',
    queryKey: ['upcoming-movie'],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data
  });
};