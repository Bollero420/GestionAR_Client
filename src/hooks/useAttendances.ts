import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';

const getAttendances = async (grade, subject) => {
  const response = await axios.get(`/attendances/`);
  return [];
  return response.data;
};

export const useAttendances = (grade, subject) => {
  return useQuery<any[], Error>(['grades', { grade, subject }], () => getAttendances(grade, subject), {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
  });
};
