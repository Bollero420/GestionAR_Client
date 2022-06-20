import React from 'react';
import { MonthlyReport } from '../../../interfaces/Report';

import { TableRow } from '../../UI/Table';

type Props = {
  data: MonthlyReport;
};

const reportName = [
  'previousMonth',
  'newThisMonth',
  'goneThisMonth',
  'leftThisMonth',
  'attendancesThisMonth',
  'unAttendancesThisMonth',
  'attendancesAverage',
  'gradeAndSection',
  'shift',
];

const ReportTableBodyRow = ({ data }: Props) => {
  const { gradeAndSection, shift, ...rest } = data;

  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20">
      <td>
        <div className="text-center">{gradeAndSection}</div>
      </td>
      <td>
        <div className="text-sm text-center">{shift}</div>
      </td>
      {reportName.map((rptName) =>
        React.Children.toArray(
          Object.keys(data[rptName]).map((key) => (
            <td>
              <div className="text-sm text-center">{data[rptName][key]}</div>
            </td>
          ))
        )
      )}
    </TableRow>
  );
};

export default ReportTableBodyRow;
