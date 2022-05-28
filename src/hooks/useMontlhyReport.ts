import { useQuery } from 'react-query';

import { axios } from '../config/axiosConfig';

const getMonthlyReport = async (month: number, year: number) => {
  const response = await axios.get(`/reports/monthly`, {
    params: {
      month,
      year,
    },
  });
  return response.data;
};

export const useMonthlyReport = (month: number, year: number) => {
  return useQuery<any[], Error>(['report_monthly', { month, year }], () => getMonthlyReport(month, year), {
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
    onError: (error) => console.log('getMonthlyReport - error ->', error),
  });
};
