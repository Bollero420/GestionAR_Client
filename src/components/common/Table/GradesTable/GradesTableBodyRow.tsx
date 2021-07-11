import React from "react";
import { ALL_GRADES_OPTIONS } from "../../../../utils/constants";
import { TableRow } from "../../../UI/Table";

const GradesTableBodyRow = ({ grade, handleGradePick }) => {

  return (
    <TableRow onClick={() => handleGradePick(grade)}>
      <td className="py-4">
        <div className="text-sm">{ALL_GRADES_OPTIONS[grade.level - 1].title}</div>
        <div className="text-sm">{grade.section}</div>
        <div className="text-sm">{grade.shift}</div>
      </td>
    </TableRow>
  );
};

export default GradesTableBodyRow;