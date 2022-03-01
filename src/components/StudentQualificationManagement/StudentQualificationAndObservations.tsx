import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useStudentQualificationAndObservations } from '../../hooks/useStudentQualificationAndObservations';
import { useGenerateStudentQualificationAndObservations } from '../../hooks/useGenerateStudentQualificationAndObservations';

import { OBSERVATIONS } from '../../utils/constants';
import TextArea from '../UI/TextArea';
import { QualificationRow } from './QualificationRow';

type Props = {
  selectedStudent?: any;
  date: string | Date;
};

const StudentQualificationAndObservations = ({ selectedStudent, date }: Props) => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
  } = useStudentQualificationAndObservations(selectedStudent?._id, date);

  const {
    mutateAsync: generateStudentQualificationAndObservations,
    isLoading: isLoadingMutation,
    isSuccess: isSuccessMutation,
    isError: isErrorMutation,
  } = useGenerateStudentQualificationAndObservations(selectedStudent?._id);

  const {
    handleSubmit: reactFormHandleSubmit,
    formState: { errors: formErrors },
    register,
    control,
    reset,
  } = useForm();

  useEffect(() => {
    if (isSuccess && data.qualifications && data.observation) {
      const qualificationsInitialData = data?.qualifications?.reduce(
        (accum: any, current: any) => {
          return {
            ...accum,
            [current.subject_id.subject_name.toLowerCase()]: current.value,
          };
        },
        {}
      );

      const observationsInitialData = {
        worry_and_effort: data?.observation.worry_and_effort,
        group_responsibility: data?.observation.group_responsibility,
        solidarity_and_collaboration: data?.observation.solidarity_and_collaboration,
        respect_rules: data.observation?.respect_rules,
        description: data.observation?.description,
      };

      reset({
        ...qualificationsInitialData,
        ...observationsInitialData,
      });
    }
  }, [isSuccess]);

  const onSubmit = async (data: any) => {
    const request: any = {
      isEdit: false,
      observation: {
        description: data.description,
        worry_and_effort: data.worry_and_effort,
        respect_rules: data.respect_rules,
        solidarity_and_collaboration: data.solidarity_and_collaboration,
        group_responsibility: data.group_responsibility,
      },
      qualifications: data.qualifications.map((q) => ({
        _id: q._id ?? null,
        subject_id: q.subject_id._id,
        value: data[q.subject_id.subject_name.toLowerCase()],
        bimonthly_date: q.bimonthly_date ?? new Date(),
      })),
    };

    if (data.observation._id) {
      request.observation._id = data.observation._id;
      request.isEdit = true;
    }

    await generateStudentQualificationAndObservations(data);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <form onSubmit={reactFormHandleSubmit(onSubmit)}>

    <div className='flex flex-row flex-1'>
      <div className="flex flex-col justify-between items-center flex-1 pr-2">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="pl-2">Materia</p>
          <p className='pr-2'>Calificacion</p>
        </div>
        <div className='overflow-y-auto w-full'>
          {data?.qualifications?.map((subjQualification: any) => (
            <QualificationRow
              name={subjQualification.subject_id.subject_name}
              title={subjQualification.subject_id.subject_name.replace(/_/g, ' ')}
              control={control}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col flex-1'>
            <div className="mb-auto">
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

      </div>
    </div>

    <div>
      <button className="border bg-blue-400 rounded min-w-max w-full p-3 my-8">Finalizar</button>
    </div>

    </form>
  );
};

export default StudentQualificationAndObservations;
