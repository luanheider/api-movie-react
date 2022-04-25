import styled from 'styled-components'

export const Contaier = styled.div`

    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3.5rem;
    row-gap: 3.5rem;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 1.5rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;

    }
    a {
        transition: all 0.5s;
    }

    a:hover {
        transform: scale(1.1);
    }
`