import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { APIkey } from '../../config/key'
import { ContainerStyled } from './styles'

function Details() {
    const navigate = useNavigate()
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const { id } = useParams()
    const fetchDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`
    const [movie, setMovie] = useState({})

    useEffect(() => {

        fetch(fetchDetails)
            .then(response => response.json())
            .then(data => {

                const { title, release_date, overview, poster_path } = data

                const movie = {
                    id,
                    title,
                    releaseDate: release_date,
                    image: `${image_path}${poster_path}`,
                    sinopse: overview
                }
                setMovie(movie)
            })
        
    }, [id])

    const handleBackButton = () => {
        navigate('/')
    }

    return (
        <ContainerStyled>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span 
                        className='release-date'>
                        Release date: {movie.releaseDate}
                    </span>
                        <button onClick={handleBackButton} className='btn'>
                            Go Back
                        </button>
                </div>
            </div>
        </ContainerStyled>
    )
}

export default Details