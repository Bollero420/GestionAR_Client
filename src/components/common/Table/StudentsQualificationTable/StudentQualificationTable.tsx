import { useState } from 'react';
import classNames from 'classnames';
import { SUBJECT_QUALIFICATION_COLUMNS } from '../../../../utils/constants';
import { ColumnHeader, Table, TableBody, TableHead, TableRow } from '../../../UI/Table';
import StudentsQualificationTableBodyRow from './StudentsQualificationTableBodyRow';
import { SortKey } from '../../../../interfaces/Table';
import { useStudents } from '../../../../hooks/useStudents';

type Props = {
  grade?: any;
  handleStudentPick: (student: any) => void;
};

const StudentsQualificationTable = ({ grade, handleStudentPick }: Props) => {
  const [sortBy, setSortBy] = useState<SortKey>('');
  const [sortOrder, setSortOrder] = useState('');

  const { data: students, isLoading, isSuccess, isError } = useStudents(grade?._id);

  /**
   * Called when table heading is clicked.
   * @param {SortKey} sortKey - value for what column to sort by
   */
  const handleSort = (sortKey: SortKey) => () => {
    if (!sortKey) {
      return;
    }

    let newSortDirection;

    // Default sort to -1 if we are sorting by a different key than we previously were
    if (sortKey !== sortBy) {
      newSortDirection = '-1';
    } else {
      // If toggling the same sort, switch the order
      newSortDirection = sortOrder === '-1' ? '1' : '-1';
    }

    setSortBy(sortKey);
    setSortOrder(newSortDirection);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            {SUBJECT_QUALIFICATION_COLUMNS.map((column, index) =>
              column.sortKey ? (
                <ColumnHeader
                  key={index}
                  sortKey={column.sortKey}
                  sortingBy={sortBy}
                  sortDirection={sortOrder}
                  sortColumn={handleSort}
                  className={classNames(
                    'cursor-pointer',
                    index === 0 && 'pl-6',
                    index === SUBJECT_QUALIFICATION_COLUMNS.length - 1 && 'pr-6'
                  )}
                >
                  {column.title}
                </ColumnHeader>
              ) : (
                <ColumnHeader
                  key={index}
                  isAction={true}
                  className={index === SUBJECT_QUALIFICATION_COLUMNS.length - 1 && 'pr-6'}
                >
                  {column.title}
                </ColumnHeader>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {!students?.length && (
            <tr>
              <td colSpan={6}>
                <div className="p-4 text-sm text-center font-bold">No Data Found</div>
              </td>
            </tr>
          )}
          {students?.map((student) => (
            <StudentsQualificationTableBodyRow
              isTeacher={false}
              handleClick={handleStudentPick}
              key={student._id}
              studentQualification={{
                student_id: student._id,
                student_name: student.lastName + ', ' + student.firstName,
                registration_number: student.registration_number,
                qualification: null,
              }}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentsQualificationTable;
