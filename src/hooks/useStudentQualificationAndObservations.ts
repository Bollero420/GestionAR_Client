import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getStudentQualificationAndObservations = async (studentId: string, date: Date | string) => {
  const response = await axios.get(`/students/qualAndObs/${studentId}`, {
    params: {
      date,
    },
  });
  return response.data;
};

export const useStudentQualificationAndObservations = (studentId?: string, date?: Date | string) => {
  return useQuery<any, Error>(
    ['student_qualification_and_observations', { studentId, date }],
    () => getStudentQualificationAndObservations(studentId, date),
    {
      enabled: !!studentId && !!date,
      staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
      onError: (error) => console.log('getStudentQualificationAndObservations - error ->', error)
    }
  );
};
