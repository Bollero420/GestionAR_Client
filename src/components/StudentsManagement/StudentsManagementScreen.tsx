import { useState, useCallback } from 'react';
import { ALL_GRADES_OPTIONS } from '../../utils/constants';
import GradeSelection from '../UI/Menu/GradeSelection';
import StudentsTable from '../common/Table/StudentsTable/StudentsTable';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useHistory } from 'react-router';

const StudentsManagementScreen = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [selectedGradeId, setSelectedGradeId] = useState<string>(null);
  const [selectedGradeTitle, setSelectedGradetitle] = useState<string>(null);


  const handleGradePick = useCallback(
    (gradeId: string, gradeTitle: string) => {
      setSelectedGradeId(gradeId);
      setSelectedGradetitle(gradeTitle);
      setStep((prevValue) => prevValue + 1);
    },
    [setStep, setSelectedGradeId]
  );

  const handleGoBack = () => {
    if (step === 1) {
      setStep((prevValue) => prevValue - 1);
    } else {
      history.goBack();
    }
  };

  let component = <></>;

  if (step === 0) component = <GradeSelection handleGradePick={handleGradePick} />;
  if (step === 1) component = <StudentsTable gradeId={selectedGradeId} />;

  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen bg-yellow-100">
      <div className="fixed top-2 left-2">
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
      </div>
      <h1 className="mb-2 text-2xl font-bold uppercase">
        Gestion de Alumnos{selectedGradeId !== null ? ':' : ''}
      </h1>
      <h2 className="mb-8 text-xl font-bold uppercase">
        {selectedGradeTitle}
      </h2>
      {component}
    </div>
  );
};

export default StudentsManagementScreen;
