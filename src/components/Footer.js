import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className=' footer'>
        <div className='container'>
            <div className='row'>

                <div className='col-lg-6 col-md-12 col-sm-12 footer-icon-div'>
                    <FontAwesomeIcon icon={faClapperboard} className="movie-icon movie-footer-icon"/>
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12 footer-text'>
                    <div>
                        <ul className='footer-list'>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} 
                                className="footer-list-icon"/>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTwitter}
                                className="footer-list-icon" />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faInstagram}
                                className="footer-list-icon" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer