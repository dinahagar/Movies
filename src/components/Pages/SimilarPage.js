import React, { useState } from 'react'
import { useGetSimilarMoviesQuery } from '../../redux/movieApi'
import PagesContent from './PagesContent'
import './Pages.css'
import { useLocation } from 'react-router'

const SimilarPage = () => { 
  const [page , setPage] = useState(1)

  const state = useLocation().state; 
  let id = state.id

  const { data, error, isLoading , isFetching } = useGetSimilarMoviesQuery(id,page)

  // console.log(page);
  return (
    <div className='pages-body'>
      <div className='container'>
        <h1 className='page-title'>Similar</h1>
        <div className='movie-page'>

          {error ? (<>Oh no, there was an error</>):
          isLoading ? (<>Loading...</>):
          isFetching ? (<></>):
          data ? (
            <> 
              {data.results.map(result => 
                <PagesContent 
                  result={result}
                  key={result.id}
                  id={result.id}
                  poster={result.poster_path}
                  title={result.title}
                  date={result.first_air_date || result.release_date}
                  media_type={result.media_type}
                  vote_average={result.vote_average}
                />  
              )} 
            </>
          ):
          null}
        </div>

      </div>
    </div>
  )
}

export default SimilarPage