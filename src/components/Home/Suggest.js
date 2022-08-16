import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faCheck } from '@fortawesome/free-solid-svg-icons';
import { addToList, removeFromList } from '../../redux/movieSlice';

const Suggest = ({id,title,backdrop,result}) => {

  const list = useSelector(state => state.movie)
  // console.log(list.listItems);
  let storedMovie = list.listItems.find(o => o.id === result.id)
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
    <div>
        <div className='movie-overlay-div'>
            <div className='movie-slide-img-link'>
                <img src={"https://image.tmdb.org/t/p/w300/"+backdrop} className="movie-slide-img" alt='' />
                <h1 className='container suggest-title'>{title}</h1>
                <button className='suggest-button' onClick={()=>handleRoute(id)}>Details</button>

                {/* add to list button */}
                <button className="list-suggest-btn">
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

export default Suggest