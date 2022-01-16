import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getStudentQualificationAndObservations = async (studentId: string) => {
  try {
    const response = await axios.get(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    console.log('getStudentQualificationAndObservations - error ->', error);
  }
};

export const useStudentQualificationAndObservations = (studentId?: string) => {
  return useQuery<any, Error>(
    ['student_qualification_and_observations', { studentId }],
    () => getStudentQualificationAndObservations(studentId),
    {
      keepPreviousData: true,
      enabled: !!studentId,
      staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
    }
  );
};
