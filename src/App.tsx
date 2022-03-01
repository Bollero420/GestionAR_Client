import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Routes from './Routes';

import { useSignOut } from './hooks/useSignOut';
import { useRefreshToken } from './hooks/useRefreshToken';
import './hooks/mockedHooks';

import { getCookie } from './utils/helper';
import { NAVIGATOR } from './utils/constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => (
    <QueryClientProvider client={queryClient}>
      <Token />
      <Router>
        <Routes />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );

const Token = () => {
  const { mutateAsync: signOut } = useSignOut();
  const { mutateAsync: refreshToken } = useRefreshToken();

  useEffect(() => {
    if (getCookie('refresh_token')) {
      if (window.location.href.includes(NAVIGATOR.sign_in)) {
        signOut({});
      } else {
        refreshToken({});
      }
    }
  }, []);
  return <></>;
}

export default App;
