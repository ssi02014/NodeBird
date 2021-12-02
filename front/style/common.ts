import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
  }

  ul,li, ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  .slick-slide {
    display: inline-block;
  }

  // ant-Design gutter scroll issue
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .ant-col:first-of-type {
    padding-left: 0 !important;
  }
  .ant-col:last-of-type {
    padding-right: 0 !important;
  }
`

export default GlobalStyle;