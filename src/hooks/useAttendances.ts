import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getAttendances = async (gradeId, subjectId) => {
  const response = await axios.get(`/attendances/`);
  return response?.data || [];
};

export const useAttendances = (gradeId, subjectId) => {
  return useQuery<any[], Error>(['grades', { gradeId, subjectId }], () => getAttendances(gradeId, subjectId), {
    keepPreviousData: true,
    enabled: !!subjectId && !!gradeId,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
  });
};
