import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getStudent = async (studentId: string) => {
  const response = await axios.get(`/students/${studentId}`);
  return response?.data || {};
};

export const useStudent = (studentId?: string) => {
  return useQuery<any, Error>(['students', { studentId }], () => getStudent(studentId), {
    keepPreviousData: true,
    enabled: !!studentId,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
  });
};
