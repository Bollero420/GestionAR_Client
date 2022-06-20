import { TableHead, TableRow } from '../../UI/Table';
import { GendersSubHeaders } from '../../UI/Reports/HeadersHelpers';

export const StudentsMonthlyReportHeader = () => (
  <TableHead>
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
);
