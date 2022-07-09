import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getSubjects = async () => {
  const response = await axios.get(`/subjects/`);
  return response?.data;
};

export const useSubjects = () => {
  return useQuery<any[], AxiosError>(['subjects'], getSubjects, {
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
    onError: (error) => console.log('getSubjects - error ->', error),
  });
};
