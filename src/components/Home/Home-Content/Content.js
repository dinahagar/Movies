import React from 'react'
import "./Content.css"
import { img_300, unavailable } from '../../../Config'
import { Badge } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const Content = ({
    id,date,title,media_type,vote_average,poster
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
    <div className='content-card'>
        <Badge overlap='rectangular'
            badgeContent={vote_average} 
            color={vote_average > 6 ? "primary" : "secondary"}
            className="home-rate"
        />
        <div className='content-card-body' onClick={()=>handleRoute(id)}>
            <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} className="poster"/>
            <div className='card-overlay'>
                <div className='title-body'>
                    <h3>{title}</h3>
                    <div className='subtitle media-type'>
                        {media_type === "tv" ? "TV Series" : "Movie"}
                    </div>
                    <div className='subtitle date'>
                        {date.substring(0,4)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content