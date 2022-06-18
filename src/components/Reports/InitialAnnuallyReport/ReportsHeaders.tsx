import { Table, TableHead, TableRow } from '../../UI/Table';
import { AllGradesHeader, GendersSubHeaders } from '../../UI/Reports/HeadersHelpers';

export const GenderByGradesHeader = () => (
  <Table>
    <TableHead>
      <col span={1} />
      <col span={1} />
      <colgroup span={5}></colgroup>
      <colgroup span={5}></colgroup>
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
    {/*
        F
        M
        T
    */}
  </Table>
);

export const ServiceHeader = () => (
  <Table>
    <TableHead>
      <col span={1} />
      <colgroup span={3}></colgroup>
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
    {/*
        Almuerzo
        Copa de Leche
    */}
  </Table>
);

export const RepeatingQuantityByGradesAndGender = () => (
  <Table>
    <TableHead>
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
    {/*
     Total
     Por 1° vez
     Por 2° vez
     Por 3° vez
     Por 4° vez
    */}
  </Table>
);

export const AgeByGradesAndGender = () => (
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
    {/*
     5
     6
     7
     8
     9
     10
     11
     12
     13
     14
     15
     16
     17
     18+
    */}
  </Table>
);

export const CountriesByGradesAndGender = () => (
  <Table>
    <TableHead>
      <col span={1} />
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
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
    {/*
      Argentina
    */}
  </Table>
);