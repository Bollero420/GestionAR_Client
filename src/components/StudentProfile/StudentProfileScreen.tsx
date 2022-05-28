import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PencilIcon, TrashIcon, ArrowLeftIcon } from '@heroicons/react/solid';

import { useStudent } from '../../hooks/useStudent';

import Modal from '../common/Modal/Modal';
import { DeleteStudentModal } from '../common/Modal/DeleteStudentModal';

import {
  STUDENT_PROFILE_FIRST_COLUMN,
  STUDENT_PROFILE_SECOND_COLUMN,
  STUDENT_TUTOR_FIRST_COLUMN,
  STUDENT_TUTOR_SECOND_COLUMN,
} from '../../utils/constants';

import { getEducationalLevel } from '../../utils/helper';

type PathParams = {
  id: string;
};

const StudentProfile = () => {
  const history = useHistory();
  const { id: studentId } = useParams<PathParams>();
  const { data: student, isLoading } = useStudent(studentId);

  const [editing, setEditing] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleGoBack = () => history.goBack();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col flex-1 px-6 gap-6 overflow-y-auto no-scroll">
      <div className="flex flex-row w-full justify-start h-10 py-2 mb-2">
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
      </div>
      <div className="flex w-full flex-1 flex-row justify-between flex-wrap gap-1">
        <div className="flex flex-1 flex-row items-center">
          <div className="w-20 h-20 border border-solid-gray-200 rounded-md"></div>
          <h1 className="text-2xl font-encode-bold pl-2">
            {student?.firstName} {student?.lastName}
          </h1>
        </div>
        <div className="flex flex-row items-center justify-between flex-wrap gap-1">
          <div
            className="flex flex-row items-center text-gray-500 cursor-pointer hover:opacity-80 rounded-2xl bg-white py-2 px-3 shadow-xl border border-solid-gray-200"
            onClick={() => setEditing(true)}
          >
            <PencilIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
            <p className="pl-2 font-encode-sans">Editar</p>
          </div>
          <div
            className="flex flex-row items-center text-gray-500 cursor-pointer hover:opacity-80 rounded-2xl bg-white py-2 px-3 shadow-xl border border-solid-gray-200"
            onClick={() => setIsOpenModal(true)}
          >
            <TrashIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
            <p className="pl-2 font-encode-sans">Eliminar</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 rounded-xl border border-solid-gray-200 p-6">
        <p className="text-left text-2xl text- font-encode-bold pb-3 text-solid-gray-500">Datos Personales</p>
        <div className="flex flex-row flex-1 items-start justify-between flex-wrap">
          <div className="flex flex-col flex-1 mr-2">
            {React.Children.toArray(
              STUDENT_PROFILE_FIRST_COLUMN.map(({ label, value }) => (
                <StudentRowData label={label} value={(student && student[value]) ?? '---'} />
              ))
            )}
          </div>
          <div className="flex flex-col flex-1">
            {React.Children.toArray(
              STUDENT_PROFILE_SECOND_COLUMN.map(({ label, value }) => (
                <StudentRowData label={label} value={(student && student[value]) ?? '---'} />
              ))
            )}
          </div>
        </div>
      </div>
      {React.Children.toArray(
        student?.student_tutors.map((tutor) => (
          <div className="flex flex-col flex-1 rounded-xl border border-solid-gray-200 p-6">
            <p className="text-left text-2xl font-encode-bold pb-3 text-solid-gray-500 break-words">
              Datos PADRE / MADRE / TUTOR
            </p>
            <div className="flex w-full flex-1 flex-row justify-between flex-wrap gap-1">
              <div className="flex flex-col flex-1 mr-2">
                {React.Children.toArray(
                  STUDENT_TUTOR_FIRST_COLUMN.map(({ label, value }) => (
                    <StudentTutorRowData label={label} value={(tutor && tutor[value]) ?? '---'} />
                  ))
                )}
              </div>
              <div className="flex flex-col flex-1">
                {React.Children.toArray(
                  STUDENT_TUTOR_SECOND_COLUMN.map(({ label, value }) => (
                    <StudentTutorRowData label={label} value={(tutor && tutor[value]) ?? '---'} />
                  ))
                )}
              </div>
            </div>
          </div>
        ))
      )}
      {isOpenModal && (
        <Modal title="Borrar Estudiante" isOpen={isOpenModal} handleIsOpen={(value: boolean) => setIsOpenModal(value)}>
          <DeleteStudentModal student={student} closeModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default StudentProfile;

const StudentRowData = ({ label, value }: { label: string; value: any }) => {
  let formattedData = value;

  if (label === 'REPITENTE') {
    formattedData = value > 0 ? 'SI' : 'NO';
  }

  return <RowContent label={label} formattedData={formattedData} />;
};

const StudentTutorRowData = ({ label, value }: { label: string; value: any }) => {
  let formattedData = value;

  if (label === 'TIPO ESCOLARIDAD') {
    formattedData = getEducationalLevel(value);
  }

  return <RowContent label={label} formattedData={formattedData} />;
};

const RowContent = ({ label, formattedData }: { label: string; formattedData: any }) => (
  <div className="flex flex-row items-center justify-between py-2 border-b border-solid-gray-100 flex-wrap">
    <p className=" text-sm font-encode-bold text-solid-gray-500 mr-2">{label}</p>
    <p>{formattedData}</p>
  </div>
);
