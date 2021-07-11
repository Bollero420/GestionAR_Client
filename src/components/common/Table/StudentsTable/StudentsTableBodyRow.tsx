import React from "react";
import { TableRow } from "../../../UI/Table";


const StudentsTableBodyRow = ({ student, redirectToProfile }) => {

  return (
    <TableRow onClick={redirectToProfile}>
      <td className="py-4">
        <div className="text-sm">{student.lastName}, {student.firstName}</div>
        <div className="text-sm">{student.registration_number}</div>
        <div className="text-sm">{student.section}</div>
        <div className="text-sm">{student.shift}</div>
      </td>
    </TableRow>
  );
};

export default StudentsTableBodyRow;