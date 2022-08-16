import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard,faMagnifyingGlass,faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate("/Search")
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light main-nav">
            <div className="container">
                <Link className="navbar-brand" to="/"> 
                    <FontAwesomeIcon icon={faClapperboard} className="movie-icon"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <div></div>
                    <form className="d-flex nav-form">

                        <div className='search-div'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={handleSearch}/>
                        </div>

                        <div className="dropdown">
                            <a className="dropdown-toggle dropdown-arrow" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faCircleUser} className="user-icon"/>
                            </a>
                            <ul className="dropdown-menu navbarDropdown-ul" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item dropdowm-li" to="/list">My List</Link>
                                </li>
                                <li>
                                    <a className="dropdown-item dropdowm-li" href="#">Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar