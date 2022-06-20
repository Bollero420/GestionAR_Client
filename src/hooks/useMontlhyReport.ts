import { useQuery } from 'react-query';

import { axios } from '../config/axiosConfig';

import { MonthlyReport } from '../interfaces/Report';

type QueryResult = {
  data: MonthlyReport[];
  grades: string[];
  month: string;
  year: string;
};

const getMonthlyReport = async (month: number, year: number) => {
  const response = await axios.get(`/reports/monthly`, {
    params: {
      month,
      year,
    },
  });
  console.log('getMonthlyReport ->', response.data);
  return response.data;
};

export const useMonthlyReport = (month: number, year: number) => {
  return useQuery<QueryResult, Error>(['report_monthly', { month, year }], () => getMonthlyReport(month, year), {
    staleTime: 1000 * 60 * 5, // Amount of time (5m) before the data is considered as Stale
    onError: (error) => console.log('getMonthlyReport - error ->', error),
  });
};
