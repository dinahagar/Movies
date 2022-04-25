import React from 'react'
import LatestMovies from './LatestMovies'
import SuggestMovies from './SuggestMovies'
import TopRated from './TopRatedMovies'
import TrendingMovies from './TrendingMovies'
import UpComing from './UpComingMovies'
import "../Home/Home.css"

const Home = () => {

  return (
    <div className='home'>
        <SuggestMovies />
        <TopRated />
        <TrendingMovies />
        <LatestMovies />
        <UpComing />
    </div>
  )
}

export default Home



        
