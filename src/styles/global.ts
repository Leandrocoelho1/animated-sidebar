import {createGlobalStyle} from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FCFCFC;
    --gray-50: #F7F7F7;
    --gray-100: #EDEFF1;
    --gray-600: #7D858C;
    --gray-900: #2D3339;
    --gray-shadows: #1F3347;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing:  border-box;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: var(--gray-900);
  }

  body {
    min-height: 100vh;
    background-color: var(--gray-50);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`