import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
  return  api.get(`/movie/popular`);
  // return  api.get(`/movie/popular?include_adult=true&include_video=true`);
  // return  api.get(`/movie/popular?language=ko-KR`);
  // return api.get(`/movie/popular?include_adult&include_video=true&sort_by=popularity.desc`);
  // return api.get(`/discover/movie?include_adult=true&include_video=true&page=1&sort_by=vote_average.desc`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    method: 'GET',
    queryKey: ['movie-popular'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};