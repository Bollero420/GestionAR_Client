import { useMutation } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/auth';

const signOut = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/signOut`);
    return response.data;
  } catch (error) {
    console.log('signOut - error ->', error);
  }
};

export const useSignOut = () => {
  return useMutation<any, Error, any>(signOut, {
    mutationKey: 'signOut',
  });
};
