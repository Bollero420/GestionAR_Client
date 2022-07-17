import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { axios } from '../config/axiosConfig';

type QueryResult = {
  genderByGrades: any[];
  foodServiceByGenders: any[];
  repeatersByGender: any[];
  studentsByAgeAndGender: any[];
  studentsByCountryAndGender: any[];
};

const getAnnuallyReport = async (type: 'initial' | 'final') => {
  const response = await axios.get(`/reports/annually/${type}`);

  return response.data;
};

export const useAnnuallyReport = (type: 'initial' | 'final') => {
  return useQuery<QueryResult, AxiosError>(['report_annually', type], () => getAnnuallyReport(type), {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    onError: (error) => console.log('getAnnuallyReport - error ->', error),
  });
};
