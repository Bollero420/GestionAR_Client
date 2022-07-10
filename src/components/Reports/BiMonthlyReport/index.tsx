import { useState } from 'react';

import { Table, TableBody } from '../../UI/Table';
import { StudentBiMonthlyReportHeader } from './ReportsHeaders';
import ReportTableBodyRow from './ReportTableBodyRow';
import ReportLoader from '../../UI/Reports/ReportLoader';

import { useBiMonthlyReport } from '../../../hooks/useBiMonthlyReport';

import { exportToCsv, generateCSVData } from '../../../utils/helper';

import { BiMonthlyGraph } from './Graphs';

export const BiMonthlyReport = ({ grade_id, month, year, selectedGradeTitle }) => {
  const { data: report, isLoading, isSuccess } = useBiMonthlyReport(month, year, grade_id);

  const [viewMode, setViewMode] = useState('report');

  if (isLoading) {
    return <ReportLoader />;
  }

  if (isSuccess) {
    const fileName = `ReporteBimestral-${year}-${month}-${selectedGradeTitle.replace('.', '')}`;

    const { csvRows } = generateCSVData('bimonthly', report.data);

    return (
      <div className="relative flex-1">
        <div className="flex flex-row items-center absolute -top-8 right-1">
          <button
            className="border rounded-xl text-xs hover:opacity-80 bg-solid-gray-500 py-1 px-2 my-2 text-white flex flex-row items-center"
            onClick={() => exportToCsv(fileName, csvRows)}
          >
            <p className="px-2">Exportar a CSV</p>
          </button>
          <button
            className="border rounded-xl text-xs hover:opacity-80 bg-solid-gray-500 py-1 px-2 my-2 text-white flex flex-row items-center"
            onClick={() => setViewMode('graph')}
          >
            <p className="px-2">Grafico</p>
          </button>
          <button
            className="border rounded-xl text-xs hover:opacity-80 bg-solid-gray-500 py-1 px-2 my-2 text-white flex flex-row items-center"
            onClick={() => setViewMode('report')}
          >
            <p className="px-2">Reporte</p>
          </button>
        </div>

        {viewMode === 'graph' && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <BiMonthlyGraph reportData={report.data} />
          </div>
        )}

        {viewMode === 'report' && (
          <Table>
            <StudentBiMonthlyReportHeader />
            <TableBody>
              {report.data.map((studentReport, index) => (
                <ReportTableBodyRow data={studentReport} index={index} key={studentReport._id} />
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    );
  }

  return <></>;
};
