import React from 'react';

const HeaderCell = ({ txt }) => (
  <th colSpan={3} scope="colgroup" className="text-center">
    {txt}
  </th>
);

const SubHeaderCell = ({ txt, extraClassName = 'text-center' }) => (
  <th scope="col" className={extraClassName}>
    <p>{txt}</p>
  </th>
);

const GRADES_CELL_CONTENT = ['1°', '2°', '3°', '4°', '5°', '6°', '7°'];
export const AllGradesHeader = () => (
  <>{React.Children.toArray(GRADES_CELL_CONTENT.map((txt) => <HeaderCell txt={txt} />))}</>
);

const GENDERS_CELL_CONTENT = ['F', 'M', 'T'];
export const GendersSubHeaders = () => (
  <>{React.Children.toArray(GENDERS_CELL_CONTENT.map((txt) => <SubHeaderCell txt={txt} />))}</>
);

const STUDENTS_BIMONTHLY_CELL_CONTENT = [
  { txt: 'ID', css: 'txt-center align-bottom' },
  { txt: 'NyA', css: 'txt-center align-bottom' },
  { txt: 'Lengua', css: 'txt-vertical' },
  { txt: 'Cs. Sociales', css: 'txt-vertical' },
  { txt: 'Matematica', css: 'txt-vertical' },
  { txt: 'Cs. Naturales', css: 'txt-vertical' },
  { txt: 'Tecnologia', css: 'txt-vertical' },
  { txt: 'Form Etica y Ciudadana	', css: 'txt-vertical' },
  { txt: 'Ed. Fisica', css: 'txt-vertical' },
  { txt: 'Plastica', css: 'txt-vertical' },
  { txt: 'Musica', css: 'txt-vertical' },
  { txt: 'Alumno en proyecto de int.', css: 'txt-vertical' },
  { txt: 'Demuestra Preocupacion y esfuerzo personal', css: 'txt-vertical' },
  { txt: 'Participa con responsabilidad en trabajo grupal', css: 'txt-vertical' },
  { txt: 'Evidencia actitudes de solidaridad y colaboracion', css: 'txt-vertical' },
  { txt: 'Respta las normas de convivencia					', css: 'txt-vertical' },
  { txt: 'Dias habiles', css: 'txt-vertical' },
  { txt: 'Asistencia', css: 'txt-vertical' },
  { txt: 'Inasistencia', css: 'txt-vertical' },
  { txt: '% Asistencia', css: 'txt-vertical' },
  { txt: 'Observaciones', css: 'txt-center align-bottom' },
];
export const StudentsBiMonthlySubHeaders = () => (
  <>
    {React.Children.toArray(
      STUDENTS_BIMONTHLY_CELL_CONTENT.map(({ txt, css }) => <SubHeaderCell txt={txt} extraClassName={css} />)
    )}
  </>
);
