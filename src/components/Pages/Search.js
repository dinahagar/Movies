import React, { useState } from 'react'
import PagesContent from './PagesContent'
import { useGetSearchQuery } from '../../redux/movieApi'

const Search = () => {

    const [searchText , setSearchText] = useState("")

    const {data} = useGetSearchQuery(searchText)

  return (
    <div className='search-page'>
        <div className='container'>
            <form>
                <input className="form-control search-input" 
                    type="search" aria-label="Search" 
                    placeholder='What are you looking for... ?'
                    value={searchText}
                    onChange={(e) => {
                        e.preventDefault()
                        setSearchText(e.target.value)
                    }
                    }
                /> 
            </form> 

        <div className='search-content'>
            {data?.results.length > 0 && searchText ? data?.results.map(result => 
                <PagesContent 
                    result={result}
                    key={result.id}
                    id={result.id}
                    poster={result.poster_path}
                    title={result.title}
                    date={result.first_air_date || result.release_date}
                    media_type={result.media_type}
                    vote_average={result.vote_average}
                />) : 
                <h1 className='no-result'>No Results Found !!!</h1>
            }
        </div>
            
        </div>
    </div>
  )




}

export default Search