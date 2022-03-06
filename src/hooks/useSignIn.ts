import { useMutation } from 'react-query';

import { axios } from '../config/axiosConfig';

const BASE_URL = '/auth';

type Request = {
  username: string;
  password: string;
};

const signIn = async (req: Request) => {
  const response = await axios.post(`${BASE_URL}/signIn`, req);
  return response.data;
};

export const useSignIn = () => {
  return useMutation<any, any, any>((req) => signIn(req), {
    mutationKey: 'signIn',
    onError: (error) => {
      console.log('signIn - error ->', error?.response?.data)
    }
  });
};
