import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getStudents = async (grade_id: string, date: string | Date) => {
  const response = await axios.get(`/students/`, {
    params: {
      grade_id,
      date,
    },
  });
  return response?.data || [];
};

export const useStudents = (grade_id?: string, date = new Date()) => {
  return useQuery<any[], AxiosError>(['students', { grade_id }], () => getStudents(grade_id, date), {
    enabled: !!grade_id,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
    onError: (error) => console.log('getStudents - error ->', error),
  });
};
