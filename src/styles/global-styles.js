import { createGlobalStyle } from 'styled-components'

const globalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        background: #000;
        color: #FFF;
        padding: 2rem;
    }

`

export default globalStyled