import { useEffect } from 'react';
import { QueryClient, QueryClientProvider, QueryObserverOptions } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Routes from './Routes';

import { useSignOut } from './hooks/useSignOut';
import { useRefreshToken } from './hooks/useRefreshToken';
// import './hooks/mockedHooks';

import { getCookie } from './utils/helper';
import { NAVIGATOR } from './utils/constants';
import { AxiosError } from 'axios';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: 1,
      onError: (error: AxiosError) => {
        if (error && error.request && error.request.status === 401) {
          // To.Do handle axios request for refresh token
          window.location.replace('http://localhost:3000/signIn');
        }
      },
    } as any,
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routes />
    <Token />
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
};

export default App;
