import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import ArrowLeftIcon from '@heroicons/react/solid/ArrowLeftIcon';
import classNames from 'classnames';

import ReportSelection from '../UI/Menu/ReportSelection';
import GradeSelection from '../UI/Menu/GradeSelection';
import { MonthAndYearSelection } from '../UI/Menu/MonthAndYearSelection';

import { MonthlyReport } from '../Reports/MonthlyReport';
import { BiMonthlyReport } from '../Reports/BiMonthlyReport';
import { InitialAnnuallyReport } from '../Reports/InitialAnnuallyReport';
import { FinalAnnuallyReport } from '../Reports/FinalAnnuallyReport';

const ReportsManagementScreen = () => {
  const history = useHistory();

  const [step, setStep] = useState(0);
  const [selectedReport, setSelectedReport] = useState<string>(null);
  const [selectedGradeTitle, setSelectedGradeTitle] = useState<string>(null);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [selectedGrade, setSelectedGrade] = useState<string>(null);

  const handleReportPick = useCallback(
    (report: string) => {
      setSelectedReport(report);
      setStep((prevValue) => prevValue + 1);
    },
    [setStep, setSelectedReport]
  );

  const handleGoBack = () => {
    if (step === 1 || step === 2) {
      setStep((prevValue) => prevValue - 1);
      setSelectedGrade(null);
      setSelectedGradeTitle(null);
    } else {
      history.goBack();
    }
  };

  const handleSelectMonth = (value: number) => setSelectedMonth(value);
  const handleSelectYear = (value: number) => setSelectedYear(value);

  const handleSelectGrade = (gradeId: string, title: string) => {
    setSelectedGrade(gradeId);
    setSelectedGradeTitle(title);
    setStep((prevValue) => prevValue + 1);
  };

  let component = <></>;
  if (step === 0) component = <ReportSelection handleReportPick={handleReportPick} />;

  if (step === 1) {
    switch (selectedReport) {
      case 'Reportes Mensuales':
        component = <MonthlyReport month={selectedMonth} year={selectedYear} />;
        break;
      case 'Reportes Bimestrales':
        component = <GradeSelection handleGradePick={handleSelectGrade} />;
        break;
      case 'Reportes Anual - Inicial':
        component = <InitialAnnuallyReport />;
        break;
      case 'Reportes Anual - Final':
        component = <FinalAnnuallyReport />;
        break;
      default:
        component = <></>;
        break;
    }
  }

  if (step === 2 && selectedReport === 'Reportes Bimestrales') {
    component = <BiMonthlyReport month={selectedMonth} year={selectedYear} grade_id={selectedGrade} />;
  }

  return (
    <div className="flex flex-col flex-1 px-6 pt-6">
      <div className="flex flex-row w-full justify-start h-10 py-2 mb-6">
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
      </div>
      <div className="flex flex-col mb-10 px-24">
        <div className="flex flex-row items-center justify-between flex-wrap">
          <div>
            <h1 className="text-2xl font-encode-bold uppercase pr-4">Gestion de Reportes</h1>
            <p className={classNames('mt-1', selectedGradeTitle !== null ? 'visible' : 'invisible')}>
              {selectedGradeTitle ?? '-'}
            </p>
          </div>
          <MonthAndYearSelection
            month={selectedMonth}
            year={selectedYear}
            handleSelectMonth={handleSelectMonth}
            handleSelectYear={handleSelectYear}
            show={step >= 1}
          />
        </div>
      </div>
      <div className="flex justify-center">{component}</div>
    </div>
  );
};

export default ReportsManagementScreen;
