import styled from 'styled-components'

export const Container = styled.div`
    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3rem;
        max-width: 50%;
    }
    .details .btn {
        background: #6654da;
        color: #FFF;
        cursor: pointer;
        padding: 0.8rem 2rem;
        border-radius: 1rem;
        border: none;
        margin-top: 1rem;
        font-size: 0.9rem;
        transition: all 0.3s;
    }
    .details .btn:hover {
        background: #5848c2;
    }
    span {
        line-height: 1.5rem;
        margin-bottom: 1rem;
    }
    .release-date {
        opacity: 0.5;
    }

    @media (max-width: 590px) {
        .movie {
            flex-direction: column;
        }
        img {
            width: 80%;
        }
        .details h1 {
            font-size: 1rem;
        }
        .details {
            margin: 0 auto;
        }
    }

`