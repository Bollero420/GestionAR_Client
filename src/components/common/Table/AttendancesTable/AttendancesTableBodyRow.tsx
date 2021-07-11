import React from "react";
import { TableRow } from "../../../UI/Table";

const AttendancesTableBodyRow = ({ attendance }) => {
  const { student, state } = attendance;
  return (
    <TableRow>
      <td className="py-4">
        <div className="text-sm">{student.lastName}, {student.firstName}</div>
        <div className="text-sm">{student.registration_number}</div>
        <div className="text-sm">{state}</div>
      </td>
    </TableRow>
  );
};

export default AttendancesTableBodyRow;