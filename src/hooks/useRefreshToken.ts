import { useMutation } from 'react-query';

import { axios } from '../config/axiosConfig';

const BASE_URL = '/auth';

const refreshToken = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/refreshToken`);
    return response.data;
  } catch (error) {
    console.log('signIn - error ->', error);
  }
};

export const useRefreshToken = () => {
  return useMutation<any, Error, any>(refreshToken, {
    mutationKey: 'signIn',
  });
};
