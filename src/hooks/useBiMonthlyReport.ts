import { useQuery } from 'react-query';

import { axios } from '../config/axiosConfig';

const getBiMonthlyReport = async (month: number, year: number, grade_id: string) => {
  const response = await axios.get(`/reports/bimonthly`, {
    params: {
      month,
      year,
      grade_id,
    },
  });
  return response.data;
};

export const useBiMonthlyReport = (month: number, year: number, grade_id: string) => {
  return useQuery<any[], Error>(
    ['report_bimonthly', { month, year }],
    () => getBiMonthlyReport(month, year, grade_id),
    {
      staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
      onError: (error) => console.log('getBiMonthlyReport - error ->', error),
    }
  );
};
