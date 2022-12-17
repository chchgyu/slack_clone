import { css, Global } from '@emotion/react';

import { reset } from './shared/reset';

const DefaultStyle = css`
  ${reset}

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

const GlobalStyles = () => {
  return <Global styles={DefaultStyle} />;
};

export default GlobalStyles;
