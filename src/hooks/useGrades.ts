import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';
import { GRADES } from '../utils/constants';

const getGrades = async () => {
  const response = await axios.get(`/grades/`);
  return GRADES;
  return response.data;
};

export const useGrades = () => {
  return useQuery<any[], Error>(['grades'], () => getGrades(), {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
  });
};
