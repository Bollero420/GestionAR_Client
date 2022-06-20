import { Table, TableBody } from '../../UI/Table';
import { StudentBiMonthlyReportHeader } from './ReportsHeaders';
import ReportTableBodyRow from './ReportTableBodyRow';
import ReportLoader from '../../UI/Reports/ReportLoader';

import { useBiMonthlyReport } from '../../../hooks/useBiMonthlyReport';

export const BiMonthlyReport = ({ grade_id, month, year }) => {
  const { data: report, isLoading, isSuccess } = useBiMonthlyReport(month, year, grade_id);

  if (isLoading) {
    return <ReportLoader />;
  }

  if (isSuccess) {
    return (
      <Table>
        <StudentBiMonthlyReportHeader />
        <TableBody>
          {report.data.map((studentReport, index) => (
            <ReportTableBodyRow data={studentReport} index={index} />
          ))}
        </TableBody>
      </Table>
    );
  }

  return <></>;
};
