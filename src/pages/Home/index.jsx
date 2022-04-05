import { ContaierStyled, MovieListStyled, MovieStyled } from './styles'
import { APIkey } from '../../config/key'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [movies, setMovies] = useState([])
    const urlAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`
    const image_path = 'https://image.tmdb.org/t/p/w500'
    
    useEffect(() => {

        fetch(urlAPI).then(response => {
            if(!response.ok) {
                throw new Error(`HTTP status error ${response.status}`)
            }
            return response.json()
        })
        .then(({ results }) => setMovies(results))
        .catch(error => {
            console.log(error.message)
        })
        
    }, [])

    return (
       <ContaierStyled>
           <h1>Movies</h1>

           <MovieListStyled>
               { movies.map(movie => {
                   return (
                    <MovieStyled key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                        </Link>
                        <span>{movie.title}</span>
                    </MovieStyled>
                   )
               }) }
           </MovieListStyled>
       </ContaierStyled>
    )
}

export default Home