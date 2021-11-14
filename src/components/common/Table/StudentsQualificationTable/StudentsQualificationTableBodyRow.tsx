import { ChangeEvent } from 'react';
import Badge, { Size, Variant } from '../../../UI/Badge/Badge';
import Select from '../../../UI/Select';
import { TableRow } from '../../../UI/Table';
import { QUALIFICATION } from './StudentsQualificationTable';

type Props = {
  isTeacher: boolean;
  handleClick: (id: string, value: QUALIFICATION) => void;
  studentQualification: any;
};

const StudentsQualificationTableBodyRow = ({ isTeacher, handleClick, studentQualification }: Props) => {
  const options = [
    {
      value: QUALIFICATION.EXC,
      label: QUALIFICATION.EXC,
    },
    {
      value: QUALIFICATION.MB,
      label: QUALIFICATION.MB,
    },
    {
      value: QUALIFICATION.B,
      label: QUALIFICATION.B,
    },
    {
      value: QUALIFICATION.S,
      label: QUALIFICATION.S,
    },
    {
      value: QUALIFICATION.NS,
      label: QUALIFICATION.NS,
    },
  ];
  const { student_id, student_name, registration_number, qualification } = studentQualification;

  const onChange = (e: ChangeEvent<any>) => handleClick(student_id, e.target.value as QUALIFICATION);

  return (
    <TableRow>
      <td className="pl-6 py-4">
        <p className="text-sm">{student_name}</p>
      </td>
      <td>
        <p className="text-sm">{registration_number}</p>
      </td>
      {isTeacher ? (
        <td className="pr-6">
          <Select
            value={qualification}
            placeholder="Calificar"
            options={options}
            name={'qualification'}
            onChange={onChange}
          />
        </td>
      ) : (
        <td className="pr-6">
          <Badge size={Size.SMALL} variant={qualification !== null ? Variant.SUCCESS : Variant.ERROR}>
            <p className="font-sen-bold capitalize text-gray-600">
              {qualification !== null ? 'Completado' : 'Incompleto'}
            </p>
          </Badge>
        </td>
      )}
    </TableRow>
  );
};

export default StudentsQualificationTableBodyRow;
