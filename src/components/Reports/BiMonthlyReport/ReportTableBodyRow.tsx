import React from 'react';
import { boolean } from 'yup';

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

const parseCellData = (value: any, key: string) => {
  let parsedValue = value;

  if (key === 'integrated') {
    parsedValue = value ? 'Si' : 'No';
  }

  if (key === 'attendances_average') {
    parsedValue = Math.round((parsedValue + Number.EPSILON) * 100) / 100;
  }

  return parsedValue;
};

const handleStyles = (key: string) => {
  if (key === 'description') {
    return 'text-sm text-left pl-1';
  }

  return 'text-sm text-center';
};

const ReportTableBodyRow = ({ data, index }: Props) => {
  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20">
      <td>
        <div className="text-center">{index + 1}</div>
      </td>
      <td>
        <div className="text-center">{data.fullName}</div>
      </td>
      {React.Children.toArray(
        reportName.map((key) => (
          <td>
            <div className={handleStyles(key)}>{parseCellData(data[key], key)}</div>
          </td>
        ))
      )}
    </TableRow>
  );
};

export default ReportTableBodyRow;
