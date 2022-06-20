import { useQuery } from 'react-query';

import { axios } from '../config/axiosConfig';

const getAnnuallyReport = async (type: 'initial' | 'final') => {
  const response = await axios.get(`/reports/annually/${type}`);
  console.log(response);
  return response.data;
};

export const useAnnuallyReport = (type: 'initial' | 'final') => {
  return useQuery<any[], Error>(['report_annually', type], () => getAnnuallyReport(type), {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    onError: (error) => console.log('getAnnuallyReport - error ->', error),
  });
};
