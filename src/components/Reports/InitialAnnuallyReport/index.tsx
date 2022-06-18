import { useAnnuallyReport } from '../../../hooks/useAnnuallyReport';

export const InitialAnnuallyReport = () => {
  const { data: report, isLoading, isSuccess } = useAnnuallyReport('initial');

  return <div>AnnuallyReport</div>;
};
