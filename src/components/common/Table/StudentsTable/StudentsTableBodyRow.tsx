import React from 'react';
import { TableRow } from '../../../UI/Table';

type Props = {
  student: any;
  redirectToProfile: (studentId: string) => void;
};

const StudentsTableBodyRow = ({ student, redirectToProfile }: Props) => {
  return (
    <TableRow onClick={() => redirectToProfile(student.id)}>
      <td className="py-4">
        <div className="text-sm">
          {student.lastName}, {student.firstName}
        </div>
        <div className="text-sm">{student.registration_number}</div>
        <div className="text-sm">{student.section}</div>
        <div className="text-sm">{student.shift}</div>
      </td>
    </TableRow>
  );
};

export default StudentsTableBodyRow;
