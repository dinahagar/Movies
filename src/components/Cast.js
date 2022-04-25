import React from 'react'
import { useGetMovieCastQuery } from '../redux/movieApi'
import "../components/MovieDetails/MovieDetails"
import Content from './Home/Home-Content/Content'
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img_300, unavailable } from '../Config';

const Cast = ({id}) => {

    const { data, error, isLoading } = useGetMovieCastQuery(id) 

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
    <div className='cast'>
        <div className='container'>
            <h1 className='similar-title'>Cast</h1>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (

                <>
                <Slider {...settings}>
                  {data.cast.slice(0,10).map((c) => (
                    <div key={c.id} className="cast-content">
                        <img src={c.profile_path? `${img_300}/${c.profile_path}` : unavailable}
                            className="cast-profile" />
                        <h6 className='cast-name'>{c.name}</h6>
                        <p className='cast-character'>{c.character}</p>
                    </div>
                  ))}
                </Slider>
              </>
            ) 
        :null}
        </div>
    </div>
  )
}

export default Cast