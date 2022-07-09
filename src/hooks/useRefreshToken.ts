import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { axios } from '../config/axiosConfig';

const BASE_URL = '/auth';

const refreshToken = async () => {
  const response = await axios.get(`${BASE_URL}/refreshToken`);
  return response.data;
};

export const useRefreshToken = () => {
  return useMutation<any, AxiosError, any>(refreshToken, {
    mutationKey: 'signIn',
    onError: (error) => console.log('refreshToken - error ->', error),
  });
};
