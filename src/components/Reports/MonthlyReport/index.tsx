import { useMonthlyReport } from '../../../hooks/useMontlhyReport';

import { StudentsMonthlyReportHeader } from './ReportsHeaders';

export const MonthlyReport = ({ month, year }: { month: number; year: number }) => {
  const { data: report, isLoading, isSuccess } = useMonthlyReport(month, year);

  return (
    <div>
      <StudentsMonthlyReportHeader />
    </div>
  );
};
