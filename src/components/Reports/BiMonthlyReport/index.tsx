import { useBiMonthlyReport } from '../../../hooks/useBiMonthlyReport';

import { StudentBiMonthlyReportHeader } from './ReportsHeaders';

export const BiMonthlyReport = ({ grade_id, month, year }) => {
  const { data: report, isLoading, isSuccess } = useBiMonthlyReport(month, year, grade_id);

  return (
    <div>
      <StudentBiMonthlyReportHeader />
    </div>
  );
};
