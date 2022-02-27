import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Routes from './Routes';

import { useSignOut } from './hooks/useSignOut';
import { useRefreshToken } from './hooks/useRefreshToken';
import './hooks/mockedHooks';

import { getCookie } from './utils/helper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  useEffect(() => {
    if (getCookie('refresh_token')) {
      if (window.location.href.includes('/signIn')) {
        signOut({});
      } else {
        refreshToken({});
      }
    }
  }, []);

  const { mutateAsync: signOut } = useSignOut();
  const { mutateAsync: refreshToken } = useRefreshToken();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
