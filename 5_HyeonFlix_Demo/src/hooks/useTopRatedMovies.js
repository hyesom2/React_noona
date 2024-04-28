import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated?watch_region=KR&language=ko`);
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    method: 'GET',
    queryKey: ['top-rated-movie'],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};