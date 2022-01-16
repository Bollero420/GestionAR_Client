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

    return levelLabel + sectionLabel + shiftLabel;
  };

  const handleGoBack = () => {
    if (step !== 0) {
      setStep((prevValue) => prevValue - 1);
    } else {
      history.goBack();
    }
  };

  let component = <></>;

  if (step === 0) component = <GradesTable handleGradePick={handleGradePick} />;
  if (isTeacher) {
    if (step === 1)
      component = <SubjectSelection gradeNumber={selectedGrade.level} handleSubjectPick={handleSubjectPick} />;
    if (step === 2) component = <StudentsQualificationFormTable grade={selectedGrade} subject={selectedSubject} />;
  } else {
    if (step === 1)
      component = <StudentQualificationTable grade={selectedGrade} handleStudentPick={handleStudentPick} />;
    if (step === 2) component = <StudentQualificationAndObservations selectedStudent={selectedStudent} />;
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen bg-yellow-100">
      <div className="fixed top-2 left-2">
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
      </div>
      <div className=" flex flex-row items-center mb-10">
        <h1 className="text-2xl font-bold uppercase pr-4">
          {!isTeacher && step === 2
            ? `ALUMNO: ${selectedStudent.fullName}`
            : `Gestion de Calificaciones${selectedGrade !== null ? `- ${handleGrade()}` : ''}`}
        </h1>
        {step === 2 && (
          <div className="py-4 max-w-xs">
            <DatePicker onChange={(date) => setSelectedDate(date)} selected={selectedDate} borderRight />
          </div>
        )}
      </div>
      <div className="flex justify-center">{component}</div>
    </div>
  );
};

export default StudentsQualificationManagementScreen;
