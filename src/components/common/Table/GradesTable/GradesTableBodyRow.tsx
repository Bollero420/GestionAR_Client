import { TableRow } from '../../../UI/Table';

type Props = {
  grade: any;
  handleGradePick: (grade: any) => void;
};

const GradesTableBodyRow = ({ grade, handleGradePick }: Props) => {
  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20" onClick={() => handleGradePick(grade)}>
      <td className="py-4 pl-6">
        <div className="text-sm">{grade?.level}</div>
      </td>
      <td className="pl-6">
        <div className="text-sm">{grade?.section}</div>
      </td>
      <td className="pr-2">
        <div className="text-sm text-center">{grade?.shift}</div>
      </td>
    </TableRow>
  );
};

export default GradesTableBodyRow;
