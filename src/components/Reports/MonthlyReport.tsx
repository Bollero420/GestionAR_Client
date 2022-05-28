import { useMonthlyReport } from '../../hooks/useMontlhyReport';

export const MonthlyReport = ({ month, year }: { month: number; year: number }) => {
  const { data: report, isLoading, isSuccess } = useMonthlyReport(month, year);
  return <div>MonthlyReport</div>;
};
