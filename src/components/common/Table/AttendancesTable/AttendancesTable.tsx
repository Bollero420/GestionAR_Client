import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import { ATTENDANCES_COLUMNS } from '../../../../utils/constants';
import { ColumnHeader, Table, TableBody, TableHead, TableRow } from '../../../UI/Table';
import AttendancesTableBodyRow from './AttendancesTableBodyRow';
import { SortKey } from '../../../../interfaces/Table';
import { useAttendances } from '../../../../hooks/useAttendances';

type Props = {
  grade: any;
  subject: any;
};

const AttendancesTable = ({ grade, subject }: Props) => {
  const [sortBy, setSortBy] = useState<SortKey>('');
  const [sortOrder, setSortOrder] = useState('');

  //? Probably will need to set form state on useEffect after components gets data from query
  const [formValues, setFormValues] = useState<{ student_id: string; state: boolean }[]>([]);

  const handleClick = (student_id: string, state: boolean) => {
    const valueIndex = formValues.findIndex((form) => form.student_id === student_id);
    if (valueIndex !== -1) {
      setFormValues((prevState) => [
        ...prevState.slice(0, valueIndex),
        { student_id, state },
        ...prevState.slice(valueIndex + 1),
      ]);
    } else {
      setFormValues((prevState) => [...prevState, { student_id, state }]);
    }
  };

  const handleSubmit = (formValues) => {
    const request = formValues.map((val) => ({
      student_id: val.id,
      subject_id: subject.id,
      state: val.value,
    }));

    //! To.DO Add mutation for attendance creation.
  };

  const { data, isLoading } = useAttendances(grade?.id, subject?.id);

  const attendances = useMemo(() => {
    return data ?? [];
  }, [data]);

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
            {ATTENDANCES_COLUMNS.map((column, index) =>
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
                    index === ATTENDANCES_COLUMNS.length - 1 && 'pr-6'
                  )}
                >
                  {column.title}
                </ColumnHeader>
              ) : (
                <ColumnHeader
                  key={index}
                  isAction={true}
                  className={index === ATTENDANCES_COLUMNS.length - 1 && 'pr-6'}
                >
                  {column.title}
                </ColumnHeader>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {!attendances.length && (
            <tr>
              <td colSpan={ATTENDANCES_COLUMNS.length}>
                <div className="p-4 text-sm text-center font-bold">No Data Found</div>
              </td>
            </tr>
          )}
          {attendances.map((attendance) => (
            <AttendancesTableBodyRow key={attendance.id} attendance={attendance} handleClick={handleClick} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AttendancesTable;
