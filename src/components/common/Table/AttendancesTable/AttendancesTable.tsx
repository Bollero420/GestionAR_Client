import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import { ATTENDANCES_COLUMNS } from '../../../../utils/constants';

import { ColumnHeader, Table, TableBody, TableHead, TableRow } from '../../../UI/Table';
import AttendancesTableBodyRow from './AttendancesTableBodyRow';

import { SortKey } from '../../../../interfaces/Table';

import { useAttendances } from '../../../../hooks/useAttendances';
import { useGenerateAttendances } from '../../../../hooks/useGenerateAttendances';

type Props = {
  grade: any;
  subject: any;
  date: string | Date;
};

const AttendancesTable = ({ grade, subject, date }: Props) => {
  const history = useHistory();

  const [sortBy, setSortBy] = useState<SortKey>('');
  const [sortOrder, setSortOrder] = useState('');

  const [formValues, setFormValues] = useState<any>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // if today attendances is not found, returns list of students with false state on attendance;
  const { data, isLoading, isSuccess } = useAttendances(grade?._id, subject?._id, date);

  const {
    mutateAsync: generateAttendances,
    isLoading: isLoadingMutation,
    isSuccess: isSuccessMutation,
    isError: isErrorMutation,
  } = useGenerateAttendances(isEdit);

  useEffect(() => {
    if (isSuccessMutation) {
      history.goBack();
    }
  }, [isSuccessMutation]);

  useEffect(() => {
    if (isSuccess && data) {
      setFormValues(data.attendances);
      setIsEdit(data.isEdit);
    }
  }, [isSuccess, data]);

  const handleClick = useCallback(
    (student_id: string, state: boolean) => {
      const valueIndex = formValues.findIndex((form) => form.student_id === student_id);
      if (valueIndex !== -1) {
        const selectedAttendance = formValues[valueIndex];
        setFormValues((prevState) => [
          ...prevState.slice(0, valueIndex),
          { ...selectedAttendance, state },
          ...prevState.slice(valueIndex + 1),
        ]);
      }
    },
    [formValues]
  );

  const handleSubmit = () => {
    const request = {
      attendances: formValues.map((val: any) => ({
        _id: val._id ?? null,
        student_id: val.student_id,
        subject_id: subject._id,
        state: val.state,
      })),
    };
    generateAttendances(request);
  };

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
          {!formValues.length && (
            <tr>
              <td colSpan={ATTENDANCES_COLUMNS.length}>
                <div className="p-4 text-sm text-center font-encode-bold">No Data Found</div>
              </td>
            </tr>
          )}
          {formValues.map((attendance) => (
            <AttendancesTableBodyRow
              isForm
              key={formValues.student_id}
              attendance={attendance}
              handleClick={handleClick}
            />
          ))}
        </TableBody>
      </Table>
      <div>
        <button
          className="border bg-primary-500 rounded-3xl min-w-max w-full p-3 my-8 text-white font-encode-bold text-xl"
          onClick={handleSubmit}
        >
          Finalizar Asistencia
        </button>
      </div>
    </div>
  );
};

export default AttendancesTable;
