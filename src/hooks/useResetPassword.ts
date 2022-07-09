import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/auth';

const resetPassword = async (req) => {
  const response = await axios.post(`${BASE_URL}/resetPassword`, req);
  return response.data;
};

export const useResetPassword = () => {
  return useMutation<any, AxiosError, any>((req) => resetPassword(req), {
    mutationKey: 'resetPassword',
    onError: (error) => console.log('resetPassword - error ->', error),
  });
};
