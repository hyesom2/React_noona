import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMovieSearch = ({ keyword, page }) => {
  return keyword 
    ? api.get(`/search/movie?query=${keyword}&watch_region=KR&language=ko&page=${page}`) 
    : api.get(`/movie/popular?watch_region=KR&language=ko&page=${page}`);
}

export const useMovieSearchQuery = ({ keyword, page }) => {
  return useQuery({
    method: "GET",
    queryKey: ["movie-search", {keyword, page}], // keyword에 따라서 url이 달라지기 때문에 keyword별 유니크한 queryKey를 만듦
    queryFn: () => fetchMovieSearch({ keyword, page }),
    select: (result) => result.data,
  });
};