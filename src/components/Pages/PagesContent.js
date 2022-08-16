import { Badge } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { img_300, unavailable } from '../../Config'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./Pages.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faCheck } from '@fortawesome/free-solid-svg-icons';
import { addToList, removeFromList } from '../../redux/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const PagesContent = ({
  id,poster,title,date,media_type,vote_average,result,listItem
}) => {

  const list = useSelector(state => state.movie)
  let storedMovie = list.listItems.find(o => o.id === result.id)
  const storedList = storedMovie ? true : false;

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleRoute = () => { 
    navigate("/moviedetails" , {
      state : {
        id:id,
        result:result
      }
    })
  }
  
  const handleAddToList = (result) => {
    dispatch(addToList(result));
    // navigate("/list")
  }

  const handleRemoveFromList = (result) => {
    dispatch(removeFromList(result))
  }

  return (
    <div className='page-content-div'>
      <Badge overlap="rectangular"
        badgeContent={vote_average} 
        color={vote_average > 6 ? "primary" : "secondary"}
        className="page-rate"
      />
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} className="page-poster" onClick={()=>handleRoute(id)}/>
        <div className='page-content-body'>
            <h4 className='page-content-title'>{title}</h4>
            <div className='page-subtitle page-media-type'>
                {media_type === "tv" ? "TV Series" : "Movie"}
            </div>
            <div className='page-subtitle page-date'>
                {date?.substring(0,4)}
            </div>
            <div>
              <button onClick={()=>handleRoute(result)} className="movie-button">
                Details
              </button>

              <button className="list-button">
                {storedList ? 
                  <FontAwesomeIcon icon={faCheck} onClick={()=>handleRemoveFromList(result)} />: 
                  <FontAwesomeIcon icon={faPlus} onClick={()=>handleAddToList(result)} />
                }              
              </button>
            
            </div>
        </div>
    </div>
  )
}

export default PagesContent
