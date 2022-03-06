import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/subjectQualifications';

const getSubjectQualifications = async (gradeId: string, subjectId: string, date: string | Date) => {
  const response = await axios.get(`${BASE_URL}/`, {
    params: {
      gradeId,
      subjectId,
      date,
    },
  });
  return response?.data;
};

export const useSubjectQualifications = (gradeId: string, subjectId: string, date: string | Date) => {
  return useQuery<{ qualifications: []; isEdit: boolean }, Error>(
    ['subject_qualifications', { gradeId, subjectId, date }],
    () => getSubjectQualifications(gradeId, subjectId, date),
    {
      enabled: !!subjectId && !!gradeId && !!date,
      staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
      onError: (error) => console.log('getSubjectQualifications - error ->', error)
    }
  );
};
