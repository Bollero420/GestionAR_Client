import { useCallback, useState } from 'react';
import { ALL_GRADES_OPTIONS } from '../../utils/constants';
import GradesTable from '../common/Table/GradesTable/GradesTable';
import SubjectSelection from '../UI/Menu/SubjectSelection';
import DatePicker from '../UI/DatePicker';
import StudentsQualificationFormTable from '../common/Table/StudentsQualificationTable/StudentsQualificationFormTable';
import StudentQualificationTable from '../common/Table/StudentsQualificationTable/StudentQualificationTable';
import StudentQualificationAndObservations from './StudentQualificationAndObservations';
import ArrowLeftIcon from '@heroicons/react/solid/ArrowLeftIcon';
import { useHistory } from 'react-router';
import classNames from 'classnames';

const StudentsQualificationManagementScreen = ({ isTeacher = false }) => {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
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

  const handleStudentPick = useCallback(
    (student) => {
      setSelectedStudent(student);
      setStep(step + 1);
    },
    [step]
  );

  const handleGrade = () => {
    const levelLabel = `${ALL_GRADES_OPTIONS[selectedGrade.level - 1].title} `;
    const sectionLabel = `"${selectedGrade.section}" `;
    const shiftLabel = `"${selectedGrade.shift}"`;

    const grade = levelLabel + sectionLabel + shiftLabel;

    return selectedSubject ? `${grade} - ${selectedSubject?.subject_name}` : grade;
  };

  const handleGoBack = () => {
    if (step !== 0) {
      step === 1 && setSelectedGrade(null);
      setStep((prevValue) => prevValue - 1);
    } else {
      history.goBack();
    }
  };

  let component = <></>;

  if (step === 0) component = <GradesTable handleGradePick={handleGradePick} />;
  if (isTeacher) {
    if (step === 1) component = <SubjectSelection handleSubjectPick={handleSubjectPick} />;
    if (step === 2)
      component = (
        <StudentsQualificationFormTable grade={selectedGrade} subject={selectedSubject} date={selectedDate} />
      );
  } else {
    if (step === 1)
      component = <StudentQualificationTable grade={selectedGrade} handleStudentPick={handleStudentPick} />;
    if (step === 2)
      component = <StudentQualificationAndObservations selectedStudent={selectedStudent} date={selectedDate} />;
  }

  return (
    <div className="flex flex-col flex-1 px-6 pt-6">
      <div className="flex flex-row w-full justify-start h-10 py-2 mb-6">
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
      </div>

      <div className="flex flex-col mb-10 px-24">
        <div className="flex flex-row items-center justify-between flex-wrap">
          <div className="flex flex-col">
            <h1 className="text-2xl font-encode-bold uppercase pr-4">Gestion de Calificaciones</h1>
            <div
              className={classNames('bg-gray-300 rounded-xl w-147', selectedGrade !== null ? 'visible' : 'invisible')}
            >
              <p className="text-left pl-4 py-1 uppercase">
                {!isTeacher && step === 2 ? selectedStudent.fullName : selectedGrade !== null ? handleGrade() : ''}
              </p>
            </div>
          </div>
          <div
            className={classNames(
              'py-4 max-w-xs',
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

export default StudentsQualificationManagementScreen;
