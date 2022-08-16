import React, { useState } from 'react'
import "./Content.css"
import { img_300, unavailable } from '../../../Config'
import { Badge } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faCheck , faInfo} from '@fortawesome/free-solid-svg-icons';
import { addToList, removeFromList } from '../../../redux/movieSlice';

const Content = ({
    id,date,title,media_type,vote_average,poster,result
}) => {

  const list = useSelector(state => state.movie)
  // console.log(list.listItems);
  let storedMovie = list.listItems.find(o => o?.id === result?.id)
  // console.log(storedMovie);
  const storedList = storedMovie ? true : false;

  // const [click , setClick] = useState(false)

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
    // setClick(true);
    dispatch(addToList(result));
    // navigate("/list")
  }

  const handleRemoveFromList = (result) => {
    dispatch(removeFromList(result))
    // setClick(false);
  }

  return (
    <div className='content-card'>
        <Badge overlap='rectangular'
            badgeContent={vote_average} 
            color={vote_average > 6 ? "primary" : "secondary"}
            className="home-rate"
        />
        <div className='content-card-body'>
            <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} className="poster"/>

           {/* add to list button */}
              <button className="list-button list-home-button">
                {storedList ? 
                 <FontAwesomeIcon icon={faCheck} onClick={()=>handleRemoveFromList(result)} />: 
                 <FontAwesomeIcon icon={faPlus} onClick={()=>handleAddToList(result)} />
                }
              </button>

              <button className='movie-home-info' onClick={()=>handleRoute(id)}>
                <FontAwesomeIcon icon={faInfo} />
              </button>

            <div className='card-overlay'>
                <div className='title-body'>
                    {/* <h3>{title}</h3> */}
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