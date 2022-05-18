import { useCallback, useState } from 'react';
import { ALL_GRADES_OPTIONS } from '../../utils/constants';
import GradesTable from '../common/Table/GradesTable/GradesTable';
import AttendancesTable from '../common/Table/AttendancesTable/AttendancesTable';
import SubjectSelection from '../UI/Menu/SubjectSelection';
import ArrowLeftIcon from '@heroicons/react/solid/ArrowLeftIcon';
import { useHistory } from 'react-router';
import DatePicker from '../UI/DatePicker';
import classNames from 'classnames';

const AttendancesManagementScreen = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleGradePick = useCallback(
    (grade) => {
      setSelectedGrade(grade);
      setStep(step + 1);
    },
    [step]
  );

  const handleSubjectPick = useCallback(
    (subject) => {
      setSelectedSubject(subject);
      setStep(step + 1);
    },
    [step]
  );

  const handleGrade = () => {
    const levelLabel = `${ALL_GRADES_OPTIONS[selectedGrade.level - 1].title} `;
    const sectionLabel = `"${selectedGrade.section}" `;
    const shiftLabel = `"${selectedGrade.shift}"`;

    return levelLabel + sectionLabel + shiftLabel;
  };

  const handleGoBack = () => {
    if (step === 1 || step === 2) {
      if (step === 1) {
        setSelectedGrade(null);
      }
      setStep((prevValue) => prevValue - 1);
    } else {
      history.goBack();
    }
  };

  let component = <></>;

  if (step === 0) component = <GradesTable handleGradePick={handleGradePick} />;
  if (step === 1) component = <SubjectSelection handleSubjectPick={handleSubjectPick} />;
  if (step === 2) component = <AttendancesTable grade={selectedGrade} subject={selectedSubject} date={selectedDate} />;

  return (
    <div className="flex flex-col flex-1 px-6 pt-6">
      <div className="flex flex-row w-full justify-start h-10 py-2 mb-2">
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
      </div>
      <div className="flex flex-col mb-6 px-24">
        <div className="flex flex-row items-center justify-between flex-wrap">
          <div className="flex flex-col">
            <h1 className="text-2xl font-encode-bold uppercase pr-4 pb-2">Gestion de Asistencias</h1>
            <div
              className={classNames(
                'bg-gray-300 rounded-xl w-147 uppercase',
                selectedGrade !== null ? 'visible' : 'invisible'
              )}
            >
              <p className="text-left pl-4 py-1">{selectedGrade !== null ? `${handleGrade()}` : ''}</p>
            </div>
          </div>
          <div
            className={classNames(
              'py-2 max-w-xs',
              step === 2 ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            )}
          >
            <DatePicker onChange={(date) => setSelectedDate(date)} selected={selectedDate} borderRight />
          </div>
        </div>
      </div>

      <div className="flex justify-center">{component}</div>
    </div>
  );
};

export default AttendancesManagementScreen;
