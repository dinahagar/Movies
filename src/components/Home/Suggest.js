import React from 'react'
import { useNavigate } from 'react-router';

const Suggest = ({id,title,backdrop}) => {

    const navigate = useNavigate();

    const handleRoute = () => {
      navigate("/moviedetails" , {
        state : {
          id:id,
        }
      })
    }

  return (
    <div>
        <div className='movie-overlay-div'>
            <div className='movie-slide-img-link'>
                <img src={"https://image.tmdb.org/t/p/w300/"+backdrop} className="movie-slide-img" alt='' />
                <h1 className='container suggest-title'>{title}</h1>
                <button className='suggest-button' onClick={()=>handleRoute(id)}>Details</button>
            </div>
        </div>
    </div>
  )
}

export default Suggest