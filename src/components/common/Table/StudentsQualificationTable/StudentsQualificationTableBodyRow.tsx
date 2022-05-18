import { ChangeEvent } from 'react';
import { QUALIFICATION_OPTIONS } from '../../../../utils/constants';
import Badge, { Size, Variant } from '../../../UI/Badge/Badge';
import Select from '../../../UI/Select';
import { TableRow } from '../../../UI/Table';
import { QUALIFICATION } from './StudentsQualificationFormTable';

type Props = {
  isTeacher: boolean;
  handleSelectOnChange?: (id: string, value: QUALIFICATION) => void;
  studentQualification?: any;
  handleClick?: (student: any) => void;
  isCompleted?: boolean;
};

const StudentsQualificationTableBodyRow = ({
  isTeacher,
  handleSelectOnChange,
  studentQualification,
  handleClick,
  isCompleted,
}: Props) => {
  const { student_id, student_name, registration_number, qualification } = studentQualification;

  const onChange = (e: ChangeEvent<any>) => handleSelectOnChange(student_id, e.target.value as QUALIFICATION);

  const onBadgeClick = () =>
    handleClick({
      _id: student_id,
      fullName: student_name,
    });

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
            options={QUALIFICATION_OPTIONS}
            name={'qualification'}
            onChange={onChange}
          />
        </td>
      ) : (
        <td className="pr-6">
          <Badge
            size={Size.SMALL}
            variant={isCompleted ? Variant.SUCCESS : Variant.ERROR}
            handleBadgeClick={onBadgeClick}
          >
            <p className="font-encode-bold capitalize text-gray-600">{isCompleted ? 'Completado' : 'Incompleto'}</p>
          </Badge>
        </td>
      )}
    </TableRow>
  );
};

export default StudentsQualificationTableBodyRow;
