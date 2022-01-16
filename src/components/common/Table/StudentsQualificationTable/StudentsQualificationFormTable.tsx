import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router';
import { SUBJECT_QUALIFICATION_FORM_COLUMNS } from '../../../../utils/constants';
import { ColumnHeader, Table, TableBody, TableHead, TableRow } from '../../../UI/Table';
import StudentsQualificationTableBodyRow from './StudentsQualificationTableBodyRow';
import { SortKey } from '../../../../interfaces/Table';
import { useStudents } from '../../../../hooks/useStudents';
import { useGenerateSubjectQualification } from '../../../../hooks/useGenerateSubjectQualification';

type Props = {
  grade?: any;
  subject?: any;
};

export enum QUALIFICATION {
  NS = 'NS',
  S = 'S',
  B = 'B',
  MB = 'MB',
  EXC = 'EXC',
}

const StudentsQualificationFormTable = ({ grade, subject }: Props) => {
  const history = useHistory();

  const [sortBy, setSortBy] = useState<SortKey>('');
  const [sortOrder, setSortOrder] = useState('');

  const [formValues, setFormValues] = useState<any>([]);

  const { data, isLoading, isSuccess, isError } = useStudents(grade?._id, subject?._id);

  // Este es para editar asistencias. Necesitamos manejar fechas tambien, si es el dia de hoy,
  // entonces traemos los alumnos, si no traemos las asistencias
  // const { data, isLoading } = useStudentsQualifications(grade?.id, subject?.id, new Date());

  const {
    mutateAsync: generateSubjectQualification,
    isLoading: isLoadingMutation,
    isSuccess: isSuccessMutation,
    isError: isErrorMutation,
  } = useGenerateSubjectQualification();

  useEffect(() => {
    if (isSuccessMutation) {
      history.goBack();
    }
  }, [isSuccessMutation]);

  useEffect(() => {
    if (isSuccess && data) {
      //set form values for Today attendance
      const values = data.map((std) => ({
        student_id: std._id,
        student_name: std.lastName + ', ' + std.firstName,
        registration_number: std.registration_number,
        qualification: null,
      }));

      setFormValues(values);
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

  const handleSubmit = () => {
    const request = formValues.map((val) => ({
      student_id: val.id,
      subject_id: subject.id,
      bimonthly_date: new Date(),
      value: val.qualification,
    }));
    console.log(request);
    generateSubjectQualification(request);
  };

  //  const { data, isLoading } = useStudentsQualification();

  //  const grades = useMemo(() => {
  //    return data ?? []
  //  },[data])

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
                <div className="p-4 text-sm text-center font-bold">No Data Found</div>
              </td>
            </tr>
          )}
          {formValues.map((student_qualification) => (
            <StudentsQualificationTableBodyRow
              isTeacher
              handleSelectOnChange={handleSelectOnChange}
              key={student_qualification.id}
              studentQualification={student_qualification}
            />
          ))}
        </TableBody>
      </Table>
      <div>
        <button className="border bg-blue-400 rounded min-w-max w-full p-3 my-8" onClick={handleSubmit}>
          Finalizar Calificación
        </button>
      </div>
    </div>
  );
};

export default StudentsQualificationFormTable;
