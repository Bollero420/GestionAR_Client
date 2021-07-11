import React, { useState } from 'react';
import { ALL_GRADES_OPTIONS } from '../../utils/constants';
import GradeSelection from '../UI/Menu/GradeSelection';
import StudentsTable from '../common/Table/StudentsTable/StudentsTable';

const StudentsManagementScreen = () => {
  const [step, setStep] = useState(0);
  const [selectedGradeIndex, setSelectedGradeIndex] = useState<number>(null);

  const handleGradePick = (index: number) => {
    setSelectedGradeIndex(index);
    setStep(step + 1)
  }

  let component = <></>

  if (step === 0) component = <GradeSelection handleGradePick={handleGradePick}/>
  if (step === 1) component = <StudentsTable gradeNumber={selectedGradeIndex + 1} />

  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen bg-yellow-100">
      <h1 className="mb-10 text-2xl font-bold uppercase">Gestion de Alumnos{selectedGradeIndex !== null ? `: ${ALL_GRADES_OPTIONS[selectedGradeIndex].title} Grado`: ''}</h1>
      {component}
    </div>
  );
}

export default StudentsManagementScreen;