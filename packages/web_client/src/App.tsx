import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@emotion/react';

import { RouterConfig, queryClient } from './libs';
import { GlobalStyle, theme } from './styles';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Suspense fallback={<span>Loading...</span>}>
          <RouterConfig />
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
