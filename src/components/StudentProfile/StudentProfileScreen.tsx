import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PencilIcon, TrashIcon, ArrowLeftIcon } from '@heroicons/react/solid';

import { useStudent } from '../../hooks/useStudent';

import Modal from '../common/Modal/Modal';
import { DeleteStudentModal } from '../common/Modal/DeleteStudentModal';

import { STUDENT_PROFILE_FIRST_COLUMN, STUDENT_PROFILE_SECOND_COLUMN } from '../../utils/constants';

import { getEducationalLevel, getOtherInfo } from '../../utils/helper';

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
          <div className="w-20 h-20 border border-black rounded-md"></div>
          <h1 className="text-2xl font-encode-bold pl-2">
            {student?.firstName} {student?.lastName}
          </h1>
        </div>
        <div className="flex flex-row items-center justify-between flex-wrap gap-1">
          <div
            className="flex flex-row items-center text-gray-500 cursor-pointer hover:opacity-80 rounded-2xl bg-white py-2 px-3 border shadow-xl border-gray-500"
            onClick={() => setEditing(true)}
          >
            <PencilIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
            <p className="pl-2 font-encode-sans">Editar</p>
          </div>
          <div
            className="flex flex-row items-center text-gray-500 cursor-pointer hover:opacity-80 rounded-2xl bg-white py-2 px-3 shadow-xl border border-gray-500"
            onClick={() => setIsOpenModal(true)}
          >
            <TrashIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
            <p className="pl-2 font-encode-sans">Eliminar</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 border rounded-xl border-black p-6">
        <p className="text-left text-xl font-encode-bold pb-3">Datos Personales</p>
        <div className="flex flex-row flex-1 items-start justify-between flex-wrap">
          <div className="flex flex-col flex-1">
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
      <div className="flex flex-col flex-1">
        <p>A Cargo</p>
        <div className="flex flex-row flex-1 items-start justify-between pt-2">
          <div className="flex flex-col pr-2 border-r border-black">
            <p className="font-encode-bold italic text-left">Nombre</p>
            {student?.student_tutors.map((st) => (
              <p>
                {st.lastName}, {st.firstName}
              </p>
            ))}
          </div>

          <div className="flex flex-col px-2 border-r border-black">
            <p className="font-encode-bold italic text-center">DNI</p>
            {student?.student_tutors.map((st) => (
              <p className="text-left">{st.dni}</p>
            ))}
          </div>

          <div className="flex flex-col px-2 border-r border-black">
            <p className="font-encode-bold italic text-center">Telefono</p>
            {student?.student_tutors.map((st) => (
              <p className="text-left">{st.phone}</p>
            ))}
          </div>

          <div className="flex flex-col px-2 border-r border-black">
            <p className="font-encode-bold italic text-center">Educacion</p>
            {student?.student_tutors.map((st) => (
              <p className="text-left">{getEducationalLevel(st.educational_level)}</p>
            ))}
          </div>

          <div className="flex flex-col pl-2 ">
            <p className="font-encode-bold italic text-center">Otros datos</p>
            {student?.student_tutors.map((st) => (
              <p className="text-left">{getOtherInfo(st.other_info)}</p>
            ))}
          </div>
        </div>
      </div>
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

  return (
    <div className="flex flex-row items-center justify-between max-w-xs py-2 border-b border-black flex-wrap">
      <p className="font-encode-bold">{label}</p>
      <p>{formattedData}</p>
    </div>
  );
};
