import React from 'react'
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetUpComingMoviesQuery } from '../../redux/movieApi'
import Content from './Home-Content/Content';
import { Link } from 'react-router-dom';

const UpComingMovies = () => {

  const { data, error, isLoading } = useGetUpComingMoviesQuery('') 

  var settings = {
    dots: false,
    arrows: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {slidesToShow: 3,}
      },
      {
        breakpoint: 768,
        settings: {slidesToShow: 2,}
      },
      {
        breakpoint: 500,
        settings: {slidesToShow: 1,}
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      },
    ],
  };

  return (
    <div className='upcoming'>
      <div className='container'>
      <Link to="/upcomingpage" className='title-a'>
        <h1 className='title'>UpComing Movies</h1>
      </Link>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (

        <>
            <Slider {...settings}>
              {data.results.slice(0,10).map((result) => (
                <Content 
                result={result}
                key={result.id}
                id={result.id}
                title={result.title || result.name}
                poster={result.poster_path}
                vote_average={result.vote_average}
                date={result.release_date || result.first_air_date}
                media_type={result.media_type}
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

export default UpComingMovies