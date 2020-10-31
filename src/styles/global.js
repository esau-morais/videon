import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Montserrat', sans-serif
  }

  body, html, #root {
    width: 100%;
    min-height: 100%;
    height: 100%;
  }

  :root {
    --gradient-blue: linear-gradient(90deg, #99E6FC -28.01%, #01D0FB 62.92%, #4F66D0 130.82%);
    --gradient-pink: linear-gradient(90deg, #FECEC8 -14.43%, #FE73C5 57.31%, #F1239A 110.87%);
    --gradient-yellow: linear-gradient(90deg, #FFE574 -11.54%, #FFC93E 72.65%, #DD921A 135.52%);

    --main-color: #1D1D1D; /* This color is used in the heading, subheading and input label */

    --button-color: #FFFFFF;
    --button-border-radius: 5px;

    --input-background: rgba(196, 196, 196, 0.35);
    --input-placeholder: #B3B3B3
  }
`;

export default Global;
