import { Table, TableHead, TableRow } from '../../UI/Table';
import { StudentsBiMonthlySubHeaders } from '../../UI/Reports/HeadersHelpers';

export const StudentBiMonthlyReportHeader = () => (
  <Table>
    <TableHead>
      <col span={1} />
      <col span={1} />
      <col span={1} />
      <col span={1} />
      <col span={1} />
      <col span={1} />
      <col span={1} />
      <col span={1} />
      <col span={1} />

      <colgroup span={2} />
      <col span={1} />
      <colgroup span={4} />

      <col span={1} />
      <col span={1} />
      <col span={1} />
      <col span={1} />
      <col span={1} />

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
  </Table>
);
