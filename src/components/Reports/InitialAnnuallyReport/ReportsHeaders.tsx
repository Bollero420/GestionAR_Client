import { TableHead, TableRow } from '../../UI/Table';
import { AllGradesHeader, GendersSubHeaders } from '../../UI/Reports/HeadersHelpers';

export const GenderByGradesHeader = () => (
  <TableHead>
    <TableRow>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={7} scope="colgroup" className="text-center">
        Grado
      </th>
    </TableRow>

    <TableRow>
      <th scope="col" className="text-center">
        Sexo
      </th>
      <th scope="col" className="text-center">
        Total
      </th>
      <th scope="col" className="text-center">
        1°
      </th>
      <th scope="col" className="text-center">
        2°
      </th>
      <th scope="col" className="text-center">
        3°
      </th>
      <th scope="col" className="text-center">
        4°
      </th>
      <th scope="col" className="text-center">
        5°
      </th>
      <th scope="col" className="text-center">
        6°
      </th>
      <th scope="col" className="text-center">
        7°
      </th>
    </TableRow>
  </TableHead>
);

export const ServiceHeader = () => (
  <TableHead>
    <TableRow>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={7} scope="colgroup" className="text-center">
        Total
      </th>
    </TableRow>

    <TableRow>
      <th scope="col" className="text-center">
        Servicio
      </th>
      <th scope="col" className="text-center">
        F
      </th>
      <th scope="col" className="text-center">
        M
      </th>
      <th scope="col" className="text-center">
        T
      </th>
    </TableRow>
  </TableHead>
);

export const RepeatingQuantityByGradesAndGender = () => (
  <TableHead>
    <TableRow>
      <th colSpan={1} scope="colgroup"></th>
      <AllGradesHeader />
    </TableRow>

    <TableRow>
      <th scope="col" className="text-center">
        Matricula Repitiente
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

export const AgeByGradesAndGender = () => (
  <TableHead>
    <TableRow>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={3} scope="colgroup" className="text-center">
        Total
      </th>
      <AllGradesHeader />
    </TableRow>

    <TableRow>
      <th scope="col" className="text-center">
        Edad
      </th>
      <GendersSubHeaders />
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

export const CountriesByGradesAndGender = () => (
  <TableHead>
    <TableRow>
      <th colSpan={1} scope="colgroup"></th>
      <th colSpan={3} scope="colgroup" className="text-center">
        Total
      </th>
      <AllGradesHeader />
    </TableRow>

    <TableRow>
      <th scope="col" className="text-center">
        Nacionalidad
      </th>
      <GendersSubHeaders />
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
