import { useQuery } from 'react-query';
import { axios } from '../config/axiosConfig';
import { SUBJECTS } from '../utils/constants';

const getSubjects = async (gradeNumber: number) => {
  const response = await axios.get(`/subjects/`, {params: {
    gradeNumber
  }});
  return SUBJECTS;
  return response.data;
};

export const useSubjects = (gradeNumber: number) => {
  return useQuery<any[], Error>(['subjects', { gradeNumber }], () => getSubjects(gradeNumber), {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
  });
};
