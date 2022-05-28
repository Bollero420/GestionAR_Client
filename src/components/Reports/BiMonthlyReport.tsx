import { useBiMonthlyReport } from '../../hooks/useBiMonthlyReport';

export const BiMonthlyReport = ({ grade_id, month, year }) => {
  const { data: report, isLoading, isSuccess } = useBiMonthlyReport(month, year, grade_id);

  return <div>BiMonthlyReport</div>;
};
