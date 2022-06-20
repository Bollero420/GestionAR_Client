import { useAnnuallyReport } from '../../../hooks/useAnnuallyReport';
import {
  GenderByGradesHeader,
  ServiceHeader,
  RepeatingQuantityByGradesAndGender,
  AgeByGradesAndGender,
  CountriesByGradesAndGender,
} from './ReportsHeaders';

export const InitialAnnuallyReport = () => {
  const { data: report, isLoading, isSuccess } = useAnnuallyReport('initial');

  return (
    <div>
      <GenderByGradesHeader />
      <ServiceHeader />
      <RepeatingQuantityByGradesAndGender />
      <AgeByGradesAndGender />
      <CountriesByGradesAndGender />
    </div>
  );
};
