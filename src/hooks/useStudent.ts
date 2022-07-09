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
    onError: (error) => {
      console.log('request -->', error.request);
      if (error && error.request && error.request.status === 401) {
        console.log('error 401');
        window.location.replace('http://localhost:3000/signIn');
      }
    },
  });
};
