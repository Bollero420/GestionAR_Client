import React from "react";
import { ALL_GRADES_OPTIONS } from "../../../../utils/constants";
import { TableRow } from "../../../UI/Table";

const StudentsQualificationTableBodyRow = ({ studentQualification }) => {
const { student, completed } = studentQualification;

  return (
    <TableRow>
      <td className="py-4">
        <div className="text-sm">{student.lastname}, {student.firstname}</div>
        <div className="text-sm">{student.regristration_number}</div>
        <div className="text-sm">{completed}</div>
      </td>
    </TableRow>
  );
};

export default StudentsQualificationTableBodyRow;