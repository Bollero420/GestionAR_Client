import { useState, useCallback } from 'react';
import GradeSelection from '../UI/Menu/GradeSelection';
import StudentsTable from '../common/Table/StudentsTable/StudentsTable';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useHistory } from 'react-router';
import classNames from 'classnames';

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
      setSelectedGradeId(null);
      setSelectedGradetitle(null);
      setStep((prevValue) => prevValue - 1);
    } else {
      history.goBack();
    }
  };

  let component = <></>;

  if (step === 0) component = <GradeSelection handleGradePick={handleGradePick} />;
  if (step === 1) component = <StudentsTable gradeId={selectedGradeId} />;

  return (
    <div className="flex flex-col flex-1 px-6 pt-6">
      <div className="flex flex-row w-full justify-start h-10 py-2 mb-6">
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
      </div>
      <div className="flex flex-col mb-10 px-24">
        <div className="flex flex-row items-center justify-between flex-wrap">
          <h1 className="text-2xl font-bold uppercase pr-4">Gestion de Alumnos</h1>
        </div>
        <div className={classNames('bg-gray-300 rounded-xl mt-2', selectedGradeId !== null ? 'visible' : 'invisible')}>
          <p className="text-left pl-4 py-1">{selectedGradeId !== null ? `${selectedGradeTitle}` : ''}</p>
        </div>
      </div>
      <div className="flex justify-center">{component}</div>
    </div>
  );
};

export default StudentsManagementScreen;
