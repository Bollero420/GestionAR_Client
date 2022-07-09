import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import { SUBJECT_QUALIFICATION_FORM_COLUMNS } from '../../../../utils/constants/columns';

import { ColumnHeader, Table, TableBody, TableHead, TableRow } from '../../../UI/Table';
import Spinner from '../../../UI/Spinner';

import StudentsQualificationTableBodyRow from './StudentsQualificationTableBodyRow';

import { SortKey } from '../../../../interfaces/Table';

import { useGenerateSubjectQualification } from '../../../../hooks/useGenerateSubjectQualification';
import { useSubjectQualifications } from '../../../../hooks/useSubjectQualifications';

type Props = {
  grade?: any;
  subject?: any;
  date: string | Date;
};

export enum QUALIFICATION {
  NS = 'NS',
  S = 'S',
  B = 'B',
  MB = 'MB',
  EXC = 'EXC',
}

const StudentsQualificationFormTable = ({ grade, subject, date }: Props) => {
  const history = useHistory();

  const [sortBy, setSortBy] = useState<SortKey>('');
  const [sortOrder, setSortOrder] = useState('');

  const [formValues, setFormValues] = useState<any>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { data, isLoading, isSuccess } = useSubjectQualifications(grade?._id, subject?._id, date);

  const {
    mutateAsync: generateSubjectQualification,
    isLoading: isLoadingMutation,
    isSuccess: isSuccessMutation,
    isError: isErrorMutation,
  } = useGenerateSubjectQualification(isEdit);

  useEffect(() => {
    if (isSuccessMutation) {
      history.goBack();
    }
  }, [isSuccessMutation]);

  useEffect(() => {
    if (isSuccess && data) {
      setFormValues(data.qualifications);
      setIsEdit(data.isEdit);
    }
  }, [isSuccess, data]);

  const handleSelectOnChange = (student_id: string, qualification: QUALIFICATION) => {
    const valueIndex = formValues.findIndex((form) => form.student_id === student_id);

    if (valueIndex !== -1) {
      const selectedQualification = formValues[valueIndex];
      setFormValues((prevState) => [
        ...prevState.slice(0, valueIndex),
        { ...selectedQualification, qualification },
        ...prevState.slice(valueIndex + 1),
      ]);
    }
  };

  const handleSubmit = async () => {
    const request = {
      qualifications: formValues.map((val) => ({
        _id: val._id ?? null,
        student_id: val.student_id,
        subject_id: subject._id,
        bimonthly_date: val.bimonthly_date ?? new Date(),
        value: val.qualification,
      })),
    };
    await generateSubjectQualification(request);
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

  if (isLoading || isLoadingMutation) {
    const message = isLoading ? 'Cargando Calificaciones' : 'Enviando Formulario';
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Spinner size={100} />
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            {SUBJECT_QUALIFICATION_FORM_COLUMNS.map((column, index) =>
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
                    index === SUBJECT_QUALIFICATION_FORM_COLUMNS.length - 1 && 'pr-6'
                  )}
                >
                  {column.title}
                </ColumnHeader>
              ) : (
                <ColumnHeader
                  key={index}
                  isAction={true}
                  className={index === SUBJECT_QUALIFICATION_FORM_COLUMNS.length - 1 && 'pr-6'}
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
              <td colSpan={6}>
                <div className="p-4 text-sm text-center font-encode-bold">No Data Found</div>
              </td>
            </tr>
          )}
          {formValues.map((student_qualification) => (
            <StudentsQualificationTableBodyRow
              isTeacher
              handleSelectOnChange={handleSelectOnChange}
              key={student_qualification._id}
              studentQualification={student_qualification}
            />
          ))}
        </TableBody>
      </Table>
      <div>
        <button
          className="border bg-primary-500 rounded-3xl min-w-max w-full p-3 my-8 text-white font-encode-bold text-xl"
          onClick={handleSubmit}
        >
          Finalizar Calificación
        </button>
      </div>
    </div>
  );
};

export default StudentsQualificationFormTable;
