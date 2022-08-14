import React, { useState } from 'react'
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetSimilarMoviesQuery } from '../redux/movieApi'
import { Link , useNavigate } from 'react-router-dom';
import Content from './Home/Home-Content/Content';

const SimilarMovies = ({id , result}) => { //id from pagecontent

  const [page , setPage] = useState(1)
  const { data, error, isLoading } = useGetSimilarMoviesQuery(id,page) 
  // console.log(data?.results);
  console.log(id); //for movie show similar for it in the same page

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
    },
    responsive: [
      {
        breakpoint: 1400,
        settings: {slidesToShow: 3,}
      },
      {
        breakpoint: 992,
        settings: {slidesToShow: 2,}
      },
      {
        breakpoint: 768,
        settings: {slidesToShow: 1,}
      },
    ],
  };

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/similarpage" , {
      state : {
        id:id,
      }
    })
  }

  return (
    <div className='similar'>
      <div className='container'>

      <h1 onClick={()=>handleRoute(id)} className="similar-title">similar</h1>

        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (

        <>
          <Slider {...settings}>
            {data.results.slice(0,10).map((m) => (
              <Content
                key={m.id}
                id={m.id}
                title={m.title || m.name}
                poster={m.poster_path}
                vote_average={m.vote_average}
                date={m.release_date || m.first_air_date}
                media_type={m.media_type}
              />
            ))}
          </Slider>
        </>
        ) 
        :null}

      </div>
    </div>
  )
}

export default SimilarMovies