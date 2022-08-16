import React from 'react'
import { useGetVideoQuery } from '../redux/movieApi'
import { Button } from '@material-ui/core'
import YouTubeIcon from '@mui/icons-material/YouTube';


const Video = ({id}) => {

    const {data} = useGetVideoQuery(id)

    let video = data?.results[0]?.key

  return (
    <div>
        <Button
            className='video-btn'
            variant='contained'
            startIcon={<YouTubeIcon />}
            color="secondary"
            target="__blank"
            href={`http://www.youtube.com/watch?v=${video}`}
            >
            Watch the Trailer
        </Button>
    </div>
  )
}

export default Video