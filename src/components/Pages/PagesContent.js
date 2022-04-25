import { Badge } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { img_300, unavailable } from '../../Config'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./Pages.css"

const PagesContent = ({
  id,poster,title,date,media_type,vote_average
}) => {

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/moviedetails" , {
      state : {
        id:id,
      }
    })
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
                {date.substring(0,4)}
            </div>
            <div>
              <button onClick={()=>handleRoute(id)} className="movie-button">
                Details
              </button>
            </div>
        </div>
    </div>
  )
}

export default PagesContent
