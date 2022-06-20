import React from 'react';

import { StudentBiMonthlyReport } from '../../../interfaces/Report';

import { TableRow } from '../../UI/Table';

type Props = {
  data: StudentBiMonthlyReport;
  index: number;
};

const reportName = [
  'lengua',
  'ciencias_sociales',
  'matematica',
  'ciencias_naturales',
  'tecnologia',
  'formacion_etica_y_ciudadana',
  'educacion_fisica',
  'plasitca',
  'musica',
  'integrated',
  'worry_and_effort',
  'group_responsibility',
  'solidarity_and_collaboration',
  'respect_rules',
  'available_days',
  'attendances',
  'unAttendances',
  'attendances_average',
  'description',
];

const ReportTableBodyRow = ({ data, index }: Props) => {
  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20" key={data._id}>
      <td>
        <div className="text-center">{index + 1}</div>
      </td>
      <td>
        <div className="text-center">{data.fullName}</div>
      </td>
      {React.Children.toArray(
        reportName.map((key) => (
          <td>
            <div className="text-sm text-center">{data[key]}</div>
          </td>
        ))
      )}
    </TableRow>
  );
};

export default ReportTableBodyRow;
