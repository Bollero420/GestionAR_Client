import { useAnnuallyReport } from '../../hooks/useAnnuallyReport';

export const AnnuallyReport = () => {
  const { data: report, isLoading, isSuccess } = useAnnuallyReport();

  return <div>AnnuallyReport</div>;
};
