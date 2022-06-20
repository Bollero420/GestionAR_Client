import { TableHead, TableRow } from '../../UI/Table';
import { StudentsBiMonthlySubHeaders } from '../../UI/Reports/HeadersHelpers';

export const StudentBiMonthlyReportHeader = () => (
  <TableHead>
    <TableRow>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>

      <th colSpan={2} scope="colgroup" className="text-center">
        Educ. Artistica
      </th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={4} scope="colgroup" className="text-center">
        Int. Personal y Social
      </th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
    </TableRow>

    <TableRow>
      <StudentsBiMonthlySubHeaders />
    </TableRow>
  </TableHead>
);
