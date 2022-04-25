import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { useGetMovieDetailsQuery } from '../../redux/movieApi'
import { img_500 } from '../../Config'
import { unavailable } from '../../Config'
import "./MovieDetails.css"
import SimilarMovies from '../SimilarMovies'
import Cast from '../Cast'
import Video from '../Video'

const MovieDetails = () => {

  const state = useLocation().state; // = const {state} = useLocation()
  let id = state.id
  const {data , error , isLoading} = useGetMovieDetailsQuery(id)

  return (
    <div className='movie-details'>
      {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (

        <>
        <div className='details-main-div'>
          <div className='details-div'>
            <img src={data.backdrop_path ? `${img_500}/${data.backdrop_path}` : unavailable} className="details-poster"/>
            <div className='details-body'>
              <h2 className='details-title'>{data.title}</h2>
              <p className='details-tagline'>{data.tagline}</p>
              <p className='details-overview'>{data.overview}</p>
              <span className='details-date'>{data.release_date}</span>
            </div>
          </div>
          <div>
            <Cast id={id}/>
          </div>
          <div className='similar-movies'>
            <SimilarMovies id={id}/>
          </div>
          <div className='video-btn-div'>
            <Video id={id} />
          </div>
        </div>
        </>
        
       )  :null}
    </div>
  )
}

export default MovieDetails