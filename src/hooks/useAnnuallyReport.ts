import { useQuery } from 'react-query';

import { axios } from '../config/axiosConfig';

const getAnnuallyReport = async () => {
  const response = await axios.get(`/reports/annually`);
  return response.data;
};

export const useAnnuallyReport = () => {
  return useQuery<any[], Error>(['report_annually'], () => getAnnuallyReport(), {
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
    onError: (error) => console.log('getAnnuallyReport - error ->', error),
  });
};
