import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;

    @media screen and (min-width: 821px) {
    padding: 0 104px;
    }

    @media screen and (max-width: 820px) {
      padding: 0 50px;
    }
  }
`
export default GlobalStyle
