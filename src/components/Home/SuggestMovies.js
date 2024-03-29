import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { useGetPopularMoviesQuery } from '../../redux/movieApi'
import Suggest from './Suggest';

const SuggestMovies = () => {

    const { data, error, isLoading } = useGetPopularMoviesQuery('')
    
    var settings = {
      autoplay: true,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
      },
      responsive: [
        {
          breakpoint: 992,
          settings: {slidesToShow: 1,}
        },
      ],
    };

  return (
    <div className='suggest'>
      <div className='container-fluid'>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (

        <>
        <Slider {...settings}>
            {data.results.slice(0,5).map((result) => (
              <Suggest  
                result={result}
                key={result.id}
                id={result.id}
                backdrop={result.backdrop_path}
                title={result.title}
              />
            ))}
        </Slider>
        </>
       )  :null}
       </div>
    </div>
  )
}

export default SuggestMovies