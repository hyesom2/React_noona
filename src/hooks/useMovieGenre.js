import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    method: 'GET',
    queryKey: ['movie-genre'],
    queryFn: fetchMovieGenre,
    select: (result) => result.data.genres,
    staleTime: 300000 // 호출되는 시간을 지정
  });
};