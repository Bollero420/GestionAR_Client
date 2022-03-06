import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getGrades = async () => {
  const response = await axios.get(`/grades/`);
  return response.data;
};

export const useGrades = () => {
  return useQuery<any[], Error>(['grades'], () => getGrades(), {
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
    onError: (error) => console.log('getGrades - error ->', error)
  });
};
