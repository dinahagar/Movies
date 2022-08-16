import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useGetMovieDetailsQuery } from '../../redux/movieApi'
import { img_500 } from '../../Config'
import { unavailable } from '../../Config'
import "./MovieDetails.css"
import SimilarMovies from '../SimilarMovies'
import Cast from '../Cast'
import Video from '../Video'
import { addToList, removeFromList } from '../../redux/movieSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'

const MovieDetails = () => {

  const state = useLocation().state; 
  let id = state.id  
  let result = state.result 

  const list = useSelector(state => state.movie)
  let storedMovie = list.listItems.find(o => o?.id === result?.id)
  const storedList = storedMovie ? true : false;

  const {data , error , isLoading} = useGetMovieDetailsQuery(id)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddToList = (result) => {
    dispatch(addToList(result));
    navigate("/list" , {
      state : {
        id:id ,
        result:result , 
      }
    })
  }

  const handleRemoveFromList = (result) => {
    dispatch(removeFromList(result))
  }

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

              <button className="details-list-button">
                {storedList ? 
                  <FontAwesomeIcon icon={faCheck} onClick={()=>handleRemoveFromList(result)} />: 
                  <FontAwesomeIcon icon={faPlus} onClick={()=>handleAddToList(result)} />
                }
              </button>

            </div>
          </div>

          <div className='video-btn-div'>
            <Video id={id} />
          </div>

          <div>
            <Cast id={id}/>
          </div>

          <div className='similar-movies'>
            <SimilarMovies id={id} result={result} />  
          </div>

        </div>
      </>
        
       ) : null}

    </div>
  )
}

export default MovieDetails