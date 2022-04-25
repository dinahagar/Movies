import React, { useState } from 'react'
import { useGetUpComingMoviesQuery } from '../../redux/movieApi'
import PagesContent from './PagesContent'
import './Pages.css'
import CustomPagination from './CustomPagination'

const UpComingPage = () => {

  const [page , setPage] = useState(1) 

  const { data, error, isLoading } = useGetUpComingMoviesQuery(page)

  let numOfPages = data?.total_pages

  return (
    <div className='pages-body'>
      <div className='container'>
        <h1 className='page-title'>UpComing</h1>
        <div className='movie-page'>

          {error ? (<>Oh no, there was an error</>):
          isLoading ? (<>Loading...</>):
          data ? (
            <> 
              {data.results.map(result => 
                <PagesContent 
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
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />

      </div>
    </div>
  )
}

export default UpComingPage