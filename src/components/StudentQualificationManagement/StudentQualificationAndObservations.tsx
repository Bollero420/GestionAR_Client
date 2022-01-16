import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useStudentQualificationAndObservations } from '../../hooks/useStudentQualificationAndObservations';
import { OBSERVATIONS } from '../../utils/constants';
import TextArea from '../UI/TextArea';
import { QualificationRow } from './QualificationRow';

type Props = {
  selectedStudent?: any;
};

const StudentQualificationAndObservations = ({ selectedStudent }: Props) => {
  const {
    data: studentQualificationAndObservations,
    isLoading,
    isSuccess,
    isError,
  } = useStudentQualificationAndObservations(selectedStudent?._id);

  const {
    handleSubmit: reactFormHandleSubmit,
    formState: { errors: formErrors },
    register,
    control,
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <form onSubmit={reactFormHandleSubmit(onSubmit)}>
      <div className="flex flex-row justify-between items-center flex-1">
        <p className="flex-1">Materia</p>
        <p>Calificacion</p>
        <div>
          {studentQualificationAndObservations?.subjectQualification?.map((subjQualification) => (
            <QualificationRow
              name={subjQualification.subject_id.subject_name}
              title={subjQualification.subject_id.subject_name}
              control={control}
            />
          ))}
        </div>
      </div>

      <div className="my-8">
        <h1 className="font-bold">Int. Personal y Social</h1>
        <div>
          {React.Children.toArray(
            OBSERVATIONS.map((obs) => <QualificationRow name={obs.key} title={obs.title} control={control} />)
          )}
        </div>
      </div>

      <div>
        <h1 className="font-bold mb-2">Observaciones</h1>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="Observaciones del Alumno..."
              errorMessage={formErrors?.description?.message}
              className="pt-8"
            />
          )}
        />
      </div>
      <div>
        <button className="border bg-blue-400 rounded min-w-max w-full p-3 my-8">Finalizar</button>
      </div>
    </form>
  );
};

export default StudentQualificationAndObservations;
