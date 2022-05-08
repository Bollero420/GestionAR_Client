import { useCallback, useState } from 'react';
import ArrowLeftIcon from '@heroicons/react/solid/ArrowLeftIcon';
import { useHistory } from 'react-router';
import ReportSelection from '../UI/Menu/ReportSelection';

const ReportsManagementScreen = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [selectedReport, setSelectedReport] = useState<string>(null);

  const handleReportPick = useCallback(
    (report: string) => {
      setSelectedReport(report);
      //   setStep((prevValue) => prevValue + 1);
    },
    [setStep, setSelectedReport]
  );

  const handleGoBack = () => {
    if (step === 1 || step === 2) {
      setStep((prevValue) => prevValue - 1);
    } else {
      history.goBack();
    }
  };

  let component = <></>;
  //! TO.DO Agregar <ReportSubSection /> para Reportes que sean por año.
  if (step === 0) component = <ReportSelection handleReportPick={handleReportPick} />;

  return (
    <div className="flex flex-col flex-1 px-6 pt-6">
      <div className="flex flex-row w-full justify-start h-10 py-2 mb-6">
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 cursor-pointer" onClick={handleGoBack} />
      </div>
      <div className="flex flex-col mb-10 px-24">
        <div className="flex flex-row items-center justify-between flex-wrap">
          <h1 className="text-2xl font-bold uppercase pr-4">Gestion de Reportes</h1>
        </div>
      </div>
      <div className="flex justify-center">{component}</div>
    </div>
  );
};

export default ReportsManagementScreen;
