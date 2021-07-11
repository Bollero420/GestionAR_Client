import React, { useCallback, useState } from 'react';
import { ALL_GRADES_OPTIONS } from '../../utils/constants';
import GradesTable from '../common/Table/GradesTable/GradesTable';
import AttendancesTable from '../common/Table/AttendancesTable/AttendancesTable';
import SubjectSelection from '../UI/Menu/SubjectSelection';
import StudentsQualificationTable from '../common/Table/StudentsQualificationTable/StudentsQualificationTable';

const AttendancesManagementScreen = () => {
  const [step, setStep] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleGradePick = useCallback((grade) => {
    setSelectedGrade(grade);
    setStep(step + 1);
  }, [step]);

  const handleSubjectPick = useCallback((subject) => {
    setSelectedSubject(subject);
    setStep(step + 1);
  }, [step]);

  const handleGrade = () => {
    const levelLabel = `${ALL_GRADES_OPTIONS[selectedGrade.level - 1].title} `;
    const sectionLabel = `"${selectedGrade.section}" `;
    const shiftLabel = `"${selectedGrade.shift}"`;

    return levelLabel+sectionLabel+shiftLabel
  }

  let component = <></>;

  if (step === 0) component = <GradesTable handleGradePick={handleGradePick}/>
  if (step === 1) component = <SubjectSelection gradeNumber={selectedGrade.level} handleSubjectPick={handleSubjectPick} />
  if (step === 2) component = <StudentsQualificationTable/>

  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen bg-yellow-100">
      <h1 className="mb-10 text-2xl font-bold uppercase">Gestion de Alumnos{selectedGrade !== null ? `- ${handleGrade()}`: ''}</h1>
      {component}
    </div>
  );
}

export default AttendancesManagementScreen;