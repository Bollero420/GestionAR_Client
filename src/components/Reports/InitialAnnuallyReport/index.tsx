import ReportLoader from '../../UI/Reports/ReportLoader';
import { Table, TableBody } from '../../UI/Table';

import {
  GenderByGradesHeader,
  ServiceHeader,
  RepeatingQuantityByGradesAndGender,
  AgeByGradesAndGender,
  CountriesByGradesAndGender,
} from './ReportsHeaders';

import {
  GenderByGradesTableBodyRow,
  FoodServiceByGendersTableBodyRow,
  RepeatersByGenderTableBodyRow,
  StudentsByAgeAndGenderTableBodyRow,
  StudentsByCountryAndGenderTableBodyRow,
} from './ReportsTableBodyRow';

import { useAnnuallyReport } from '../../../hooks/useAnnuallyReport';

const Headers = {
  genderByGrades: <GenderByGradesHeader />,
  foodServiceByGenders: <ServiceHeader />,
  repeatersByGender: <RepeatingQuantityByGradesAndGender />,
  studentsByAgeAndGender: <AgeByGradesAndGender />,
  studentsByCountryAndGender: <CountriesByGradesAndGender />,
};

const Body = {
  genderByGrades: (props) => <GenderByGradesTableBodyRow {...props} />,
  foodServiceByGenders: (props) => <FoodServiceByGendersTableBodyRow {...props} />,
  repeatersByGender: (props) => <RepeatersByGenderTableBodyRow {...props} />,
  studentsByAgeAndGender: (props) => <StudentsByAgeAndGenderTableBodyRow {...props} />,
  studentsByCountryAndGender: (props) => <StudentsByCountryAndGenderTableBodyRow {...props} />,
};

export const InitialAnnuallyReport = () => {
  const { data: report, isLoading, isSuccess } = useAnnuallyReport('initial');

  if (isLoading) {
    return <ReportLoader />;
  }

  if (isSuccess && report) {
    {
      Object.keys(report).map((reportName) => {
        const data = report[reportName];
        return (
          <Table>
            {Headers[reportName]}
            <TableBody>
              {data.map((data, index) => Body[reportName]({ data, index, key: reportName + '_' + index }))}
            </TableBody>
          </Table>
        );
      });
    }
  }

  return <></>;
};
