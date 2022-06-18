import { Table, TableHead, TableRow } from '../../UI/Table';
import { GendersSubHeaders, AllGradesHeader } from '../../UI/Reports/HeadersHelpers';

export const StudentsMonthlyReportHeader = () => (
  <Table>
    <TableHead>
      <col span={1} />
      <col span={1} />
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <TableRow>
        <th colSpan={1} scope="colgroup"></th>
        <th colSpan={1} scope="colgroup"></th>
        <th colSpan={3} scope="colgroup" className="text-center">
          Del Mes Anterior
        </th>
        <th colSpan={3} scope="colgroup" className="text-center">
          Entrados
        </th>
        <th colSpan={3} scope="colgroup" className="text-center">
          Salidos
        </th>
        <th colSpan={3} scope="colgroup" className="text-center">
          Quedan
        </th>
        <th colSpan={3} scope="colgroup" className="text-center">
          Asist.
        </th>
        <th colSpan={3} scope="colgroup" className="text-center">
          Inasist.
        </th>
        <th colSpan={3} scope="colgroup" className="text-center">
          Asist. Media
        </th>
      </TableRow>

      <TableRow>
        <th scope="col" className="text-center">
          Grado y Seccion
        </th>
        <th scope="col" className="text-center">
          Turno
        </th>
        <GendersSubHeaders />
        <GendersSubHeaders />
        <GendersSubHeaders />
        <GendersSubHeaders />
        <GendersSubHeaders />
        <GendersSubHeaders />
        <GendersSubHeaders />
      </TableRow>
    </TableHead>
  </Table>
);
