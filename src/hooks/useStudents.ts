import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getStudents = async (grade_id: string, subject_id?: string) => {
  try {
    const response = await axios.get(`/students/`, {
      params: {
        grade_id,
        subject_id,
      },
    });
    console.log('response -->', response);
    return response?.data || [];
  } catch (error) {
    console.log('error ->', error);
  }
};

export const useStudents = (grade_id?: string, subject_id?: string) => {
  console.log({ grade_id, subject_id });
  return useQuery<any[], Error>(['students', { grade_id, subject_id }], () => getStudents(grade_id, subject_id), {
    keepPreviousData: true,
    enabled: !!grade_id,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
  });
};
