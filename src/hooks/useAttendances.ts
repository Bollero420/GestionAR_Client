import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/attendances';

const getAttendances = async (gradeId: string, subjectId: string, date: string | Date) => {
  const response = await axios.get(`${BASE_URL}/`, {
    params: {
      gradeId,
      subjectId,
      date,
    },
  });
  return response?.data;
};

export const useAttendances = (gradeId: string, subjectId: string, date: string | Date) => {
  return useQuery<{ attendances: []; isEdit: boolean }, AxiosError>(
    ['atendances', { gradeId, subjectId, date }],
    () => getAttendances(gradeId, subjectId, date),
    {
      enabled: !!subjectId && !!gradeId && !!date,
      staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
      onError: (error) => console.log('getAttendances - error ->', error),
    }
  );
};
