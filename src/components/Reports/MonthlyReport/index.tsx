import { Table, TableBody } from '../../UI/Table';
import ReportLoader from '../../UI/Reports/ReportLoader';
import { StudentsMonthlyReportHeader } from './ReportsHeaders';
import ReportTableBodyRow from './ReportTableBodyRow';

import { useMonthlyReport } from '../../../hooks/useMontlhyReport';

export const MonthlyReport = ({ month, year }: { month: number; year: number }) => {
  const { data: reports, isLoading, isSuccess } = useMonthlyReport(month, year);

  if (isLoading) {
    return <ReportLoader />;
  }

  if (isSuccess) {
    return (
      <div>
        {reports.data.map((report: any, index: number) => (
          <Table key={reports.grades[index]}>
            <StudentsMonthlyReportHeader />
            <TableBody>
              <ReportTableBodyRow data={report} />
            </TableBody>
          </Table>
        ))}
      </div>
    );
  }

  return <></>;
};
