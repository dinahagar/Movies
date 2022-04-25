import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getLatestMovies: builder.query({
        query: (page = 1) => `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    }),
    getTopRatedMovies: builder.query({
        query: (page = 1) => `movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    }),
    getTrendingMovies: builder.query({
        query: (page = 1) => `trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    }),
    getUpComingMovies: builder.query({
        query: (page = 1) => `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    }),
    getMovieDetails: builder.query({
      query: (id) => `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    }),
    getSimilarMovies: builder.query({
      query: (id,page=1) => `movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    }),
    getMovieCast:builder.query({
      query: (id) => `movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    }),
    getSearch:builder.query({
      query: (page=1,searchText) => `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${page}`
    }),
    getVideo:builder.query({
      query: (id) => `movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    }),

  }),
})

export const { 
    useGetPopularMoviesQuery ,
    useGetLatestMoviesQuery , 
    useGetTopRatedMoviesQuery , 
    useGetTrendingMoviesQuery,           
    useGetUpComingMoviesQuery,
    useGetSimilarMoviesQuery,
    useGetMovieDetailsQuery,
    useGetMovieCastQuery,
    useGetSearchQuery,
    useGetVideoQuery,
    } = movieApi

