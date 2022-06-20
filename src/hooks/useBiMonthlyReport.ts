import { useQuery } from 'react-query';

import { axios } from '../config/axiosConfig';

import { BiMonthlyReport } from '../interfaces/Report';

type QueryResult = {
  data: BiMonthlyReport;
  month: string;
  year: string;
  grade_id: string;
};

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
  return useQuery<QueryResult, Error>(
    ['report_bimonthly', { month, year, grade_id }],
    () => getBiMonthlyReport(month, year, grade_id),
    {
      staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
      onError: (error) => console.log('getBiMonthlyReport - error ->', error),
    }
  );
};
