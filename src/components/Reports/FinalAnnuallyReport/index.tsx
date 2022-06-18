import { useAnnuallyReport } from '../../../hooks/useAnnuallyReport';

export const FinalAnnuallyReport = () => {
  const { data: report, isLoading, isSuccess } = useAnnuallyReport('final');

  return <div>AnnuallyReport</div>;
};
