import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getStudent = async (studentId: string) => {
  const response = await axios.get(`/students/${studentId}`);
  return response.data;
};

export const useStudent = (studentId?: string) => {
  return useQuery<any, AxiosError>(['students', { studentId }], () => getStudent(studentId), {
    enabled: !!studentId,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
    onError: (error: any) => console.log('getStudent - error ->', error)
  });
};
