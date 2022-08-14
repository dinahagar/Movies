import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight , faTrash } from '@fortawesome/free-solid-svg-icons';
import { clearList, removeFromList } from '../../../redux/movieSlice';
import { img_300, unavailable } from '../../../Config';
import { Badge } from '@material-ui/core';
import "./List.css"

const List = () => {

    const list = useSelector(state => state.movie)
    console.log(list.listItems);
    // console.log(list.listItems);

    const dispatch = useDispatch()

    // const state = useLocation().state; 
    // let id = state.id  //from details //from pagecontent
    // let result = state.result
    // console.log(result);
  
    const handleClearCart = () => {
        dispatch(clearList())
    } 

    const handleRemoveItemFromList = (listItem) => {
        dispatch(removeFromList(listItem))
    } 

    const navigate = useNavigate();

    const handleRoute = (listItem) => {
      navigate("/moviedetails" , {
        state : {
          id:listItem.id,
        }
      })
    }

  return (
    <div>
        <h2 className='list-h'>List</h2>
        {list.listItems.length === 0 ? (
            <div className='empty-div1'>
                <p className='empty-p1'>Your List is Empty !!!</p>
                <div className='empty-div2'>
                    <p className='empty-p2'>Start add Movies to yor List</p>
                    <Link to="/" >
                        <FontAwesomeIcon icon={faArrowRight} className="empty-icon"/>
                    </Link>
                </div>
            </div>
        ) : (
            <div className='container'>
                <div className='list-div'>
                    {list.listItems.map(listItem => (
                        <div className='page-content-div' key={listItem?.id}>
                            <Badge overlap="rectangular"
                                badgeContent={listItem?.vote_average} 
                                color={listItem?.vote_average > 6 ? "primary" : "secondary"}
                                className="page-rate"
                            />
                            <img src={listItem?.poster_path ? `${img_300}/${listItem?.poster_path}` : unavailable} alt={listItem?.title} className="page-poster" onClick={()=>handleRoute(listItem.id)}/>
                                <div className='page-content-body'>
                                    <h4 className='page-content-title'>{listItem?.title}</h4>
                                    <div className='page-subtitle page-media-type'>
                                        {listItem?.media_type === "tv" ? "TV Series" : "Movie"}
                                    </div>
                                    <div className='page-subtitle page-date'>
                                        {listItem?.date?.substring(0,4)}
                                    </div>
                                    <div>
                                        <button onClick={()=>handleRoute(listItem)} className="movie-button">
                                            Details
                                        </button>
                                        <button onClick={()=>handleRemoveItemFromList(listItem)} className="remove">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>

                <div className='clear-btn-div'><button onClick={()=>handleClearCart()} className="clear-btn">Cleat List</button></div>
            </div>
        )}
    </div>
  )
}

export default List