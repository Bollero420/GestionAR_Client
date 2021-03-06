import { useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import { useStudents } from '../../../../hooks/useStudents';

import { STUDENTS_COLUMNS } from '../../../../utils/constants/columns';
import { NAVIGATOR } from '../../../../utils/constants';

import { ColumnHeader, Table, TableBody, TableHead, TableRow } from '../../../UI/Table';
import Spinner from '../../../UI/Spinner';

import { SortKey } from '../../../../interfaces/Table';

import StudentsTableBodyRow from './StudentsTableBodyRow';

type Props = {
  gradeId: string;
};

const StudentsTable = ({ gradeId }: Props) => {
  const history = useHistory();
  const [sortBy, setSortBy] = useState<SortKey>('');
  const [sortOrder, setSortOrder] = useState('');

  const { data, isLoading } = useStudents(gradeId);

  const students = useMemo(() => {
    return data ?? [];
  }, [data]);

  /**
   * Called when table heading is clicked.
   * @param {String} sortKey - string for what column to sort by
   */
  const handleSort = (sortKey) => () => {
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

  const redirectToProfile = (studentId: string) =>
    history.push(`${NAVIGATOR.students}/${studentId}`, { from: NAVIGATOR.students });

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Spinner size={100} />
        <p>Cargando Estudiantes</p>
      </div>
    );
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            {STUDENTS_COLUMNS.map((column, index) =>
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
                    index === STUDENTS_COLUMNS.length - 1 && 'pr-6'
                  )}
                >
                  {column.title}
                </ColumnHeader>
              ) : (
                <ColumnHeader key={index} isAction={true} className={index === STUDENTS_COLUMNS.length - 1 && 'pr-6'}>
                  {column.title}
                </ColumnHeader>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {!students.length && (
            <tr>
              <td colSpan={6}>
                <div className="p-4 text-sm text-center font-encode-bold">No Data Found</div>
              </td>
            </tr>
          )}
          {students.map((student) => (
            <StudentsTableBodyRow key={student._id} student={student} redirectToProfile={redirectToProfile} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentsTable;
