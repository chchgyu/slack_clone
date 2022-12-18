import './firebase';

import { ThemeProvider } from '@emotion/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { RootRoutes } from './routes';
import { currentUserAtom } from './store';
import { GlobalStyles } from './styles';

const theme = {};

const App = () => {
  const setCurrentUser = useSetRecoilState(currentUserAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) =>
      user ? setCurrentUser(user) : setCurrentUser(null),
    );

    return () => unsubscribe();
  }, [setCurrentUser]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<span>Loading...</span>}>
          <RootRoutes />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
