import React from 'react';
import { Badge, Size, Variant } from '../../../UI/Badge/Badge';
import { TableRow } from '../../../UI/Table';
import { AttendanceState } from './AttendaceState';

type Props = {
  attendance: any;
  isForm?: boolean;
  handleClick?: (student_id: string, state: boolean) => void;
};

const AttendancesTableBodyRow = ({ attendance, isForm, handleClick }: Props) => {
  const { student, state } = attendance;
  return (
    <TableRow>
      <td className="py-4">
        <div className="text-sm">
          {student.lastName}, {student.firstName}
        </div>
      </td>
      <td>
        <div className="text-sm">{student.registration_number}</div>
      </td>
      {isForm ? (
        <td>
          <AttendanceState student_id={student?.id} state={state} handleClick={handleClick} />
        </td>
      ) : (
        <td>
          <Badge size={Size.SMALL} variant={state ? Variant.SUCCESS : Variant.ERROR}>
            <p className="font-sen-bold capitalize text-gray-600">{state ? 'Presente' : 'Ausente'}</p>
          </Badge>
        </td>
      )}
    </TableRow>
  );
};

export default AttendancesTableBodyRow;
