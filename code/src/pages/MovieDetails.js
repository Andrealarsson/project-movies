import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const {id} = useParams()
  const [movieDetails, setMovieDetails] = useState()

  
  
  //const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e87ff9a70deb7f8f6f897b1efba6340a&language=en-US`

  useEffect(() => {
    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=e87ff9a70deb7f8f6f897b1efba6340a&language=en-US`)
    .then ((res) => res.json())
    .then ((json) => setMovieDetails(json))
    .catch(err => console.error(err))
  }, [id])

  if(movieDetails === undefined) {
    return   <></>
  }

  return (
    <>
    <div>
    <img src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} alt=""/>
    <h2>{movieDetails.title}</h2>
    <p>Movie Details</p>
    </div>
    </>
  )
}
 

