import { ThemeProvider } from '@emotion/react';
import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ROUTER_NAME } from './constants';
import { Login, Signup } from './pages';
import { GlobalStyles } from './styles';

const theme = {};

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path={ROUTER_NAME.HOME} element={<Navigate to={ROUTER_NAME.LOGIN} />} />
          <Route path={ROUTER_NAME.LOGIN} element={<Login />} />
          <Route path={ROUTER_NAME.SIGNUP} element={<Signup />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
