import { useMutation } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/auth';

const signOut = async (req) => {
  try {
    const response = await axios.post(`${BASE_URL}/signOut`, req);
    return response.data;
  } catch (error) {
    console.log('signOut - error ->', error);
  }
};

export const useSignOut = () => {
  return useMutation<any, Error, any>((req) => signOut(req), {
    mutationKey: 'signOut',
  });
};
