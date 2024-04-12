import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const MoviePreview = (id) => {
  return api.get(`/movie/${id}/videos`);
}

export const useMoviePreviewQuery = (id) => {
  return useQuery({
    method: "GET",
    queryKey: ['movie-preview'],
    queryFn: () => MoviePreview(id),
    select: (result) => result.data,
  });
}