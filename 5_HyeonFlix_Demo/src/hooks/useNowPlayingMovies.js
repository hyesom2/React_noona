import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPlayingMovies = () => {
  return api.get(`/movie/now_playing?watch_region=KR&language=ko`);
};

export const useNowPlayingMoviesQuery = () => {
  return useQuery({
    method: 'GET',
    queryKey: ['now-playing-movie'],
    queryFn: fetchPlayingMovies,
    select: (result) => result.data,
  });
};