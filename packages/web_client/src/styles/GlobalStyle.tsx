import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const DefaultStyle = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 100%;
    line-height: 1.4;
    color: #333;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={DefaultStyle} />;
};

export default GlobalStyle;
