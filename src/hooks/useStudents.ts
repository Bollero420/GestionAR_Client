import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getStudents = async (gradeNumber: number) => {
  const response = await axios.get(`/students/`, {params: {
    gradeNumber
  }});
  return [];
  return response.data;
};

export const useStudents = (gradeNumber: number) => {
  return useQuery<any[], Error>(['students', { gradeNumber }], () => getStudents(gradeNumber), {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
  });
};
