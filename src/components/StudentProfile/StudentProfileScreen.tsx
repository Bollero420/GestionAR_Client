import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useStudent } from '../../hooks/useStudent';
import { PencilIcon, TrashIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import { RadioBoxRow } from '../UI/RadioBoxRow/RadioBoxRow';

type PathParams = {
  id: string;
};

const StudentProfile = () => {
  const history = useHistory();
  const { id: studentId } = useParams<PathParams>();
  const { data: student, isLoading } = useStudent(studentId);

  const handleGoBack = () => history.goBack();

  // if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col flex-1 h-screen bg-yellow-100 px-4 gap-6">
      <div className="flex w-full flex-row items-start justify-between pt-3">
        <div className="flex flex-1">
          <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
        </div>
        <div className="flex flex-1 flex-row items-start justify-end">
          <div className="flex flex-col gap-1 content-between">
            <h1 className="text-2xl font-bold align-top">{student?.name}</h1>
            <div className="flex flex-row items-center justify-between">
              <PencilIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
              <TrashIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="ml-4 w-24 h-24 border border-black rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-row flex-1 justify-between items-start">
        <div className="flex flex-col flex-1">
          <p className="font-bold">Datos Personales</p>
          <div className="flex flex-row items-center">
            <p>DNI:</p>
            <p>{student?.dni}</p>
          </div>
          <div className="flex flex-row items-center">
            <p>Fech.Nac:</p>
            <p>{student?.birth_date}</p>
          </div>
          <div className="flex flex-row items-center">
            <p>Legajo:</p>
            <p>{student?.registration_number}</p>
          </div>
          <div className="flex flex-row items-center">
            <p>Grado:</p>
            <p>{student?.grade_id}</p>
          </div>
          <div className="flex flex-row items-center">
            <p>Sección:</p>
            <p>{student?.grade_id}</p>
          </div>
          <RadioBoxRow formProp="repeating_quantity" label="Repitente" />
          <div className="flex flex-row items-center">
            <p>Teléfono:</p>
            <p>{student?.phone}</p>
          </div>
          <div className="flex flex-row items-center">
            <p>Calle:</p>
            <p>{student?.address}</p>
          </div>
          <div className="flex flex-row items-center">
            <p>Barrio:</p>
            <p>{student?.neighborhood}</p>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <p className="font-bold">Comedor Escolar</p>
          <RadioBoxRow formProp="milk_cup" label="Copa de leche" />
          <RadioBoxRow formProp="school_dining" label="Almuerzo" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <p>A Cargo</p>
        <div className="flex flex-row flex-1 items-start justify-between">
          <div className="flex flex-col pr-2 border-r border-black">
            <p className="font-bold italic text-center">Nombre</p>
            <p>
              {student?.student_tutors[0]?.lastName}, {student?.student_tutors[0]?.firstName}
            </p>
            <p>
              {student?.student_tutors[1]?.lastName}, {student?.student_tutors[1]?.firstName}
            </p>
          </div>

          <div className="flex flex-col px-2 border-r border-black">
            <p className="font-bold italic text-center">DNI</p>
            <p className="text-left">{student?.student_tutors[0]?.dni}</p>
            <p className="text-left">{student?.student_tutors[1]?.dni}</p>
          </div>

          <div className="flex flex-col px-2 border-r border-black">
            <p className="font-bold italic text-center">Telefono</p>
            <p className="text-left">{student?.student_tutors[0]?.phone}</p>
            <p className="text-left">{student?.student_tutors[1]?.phone}</p>
          </div>

          <div className="flex flex-col px-2 border-r border-black">
            <p className="font-bold italic text-center">Educacion</p>
            <p className="text-left">{student?.student_tutors[0]?.educational_level}</p>
            <p className="text-left">{student?.student_tutors[1]?.educational_level}</p>
          </div>

          <div className="flex flex-col pl-2 ">
            <p className="font-bold italic text-center">Otros datos</p>
            <p className="text-left">{student?.student_tutors[0]?.other_info}</p>
            <p className="text-left">{student?.student_tutors[1]?.other_info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
