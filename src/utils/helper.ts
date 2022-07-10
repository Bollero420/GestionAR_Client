import { format as formater } from 'date-fns';

import {
  CIVIL_STATUS_OPTIONS,
  EDUCATIONAL_LEVEL_OPTIONS,
  GENDER_OPTIONS,
  OTHER_INFO_OPTIONS,
} from './constants/selectOptions';

export const getArrayNumber = (limit: number): number[] => {
  const array = [];
  for (let i = 1; i <= limit; i++) {
    array.push(i);
  }
  return array;
};

export const getCookie = (cname: string) => {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const parseGradeName = (grade: any) => {
  let name = '';
  switch (grade.level) {
    case '1':
      name = '1ero';
      break;
    case '2':
      name = '2ndo';
      break;
    case '3':
      name = '3ero';
      break;
    case '4':
      name = '4to';
      break;
    case '5':
      name = '5to';
      break;
    case '6':
      name = '6to';
      break;
    case '7':
      name = '7to';
      break;
  }
  const result = `${name} ${grade.section} T.${grade.shift}`;
  return result;
};

export const getEducationalLevel = (value: string) =>
  EDUCATIONAL_LEVEL_OPTIONS.find((ed_lvl) => ed_lvl.value === value).label;
export const getOtherInfo = (value: string) => OTHER_INFO_OPTIONS.find((ot_info) => ot_info.value === value).label;
export const getGender = (value: string) => GENDER_OPTIONS.find((gdr_op) => gdr_op.value === value).label;
export const getCivilStatus = (value: string) => CIVIL_STATUS_OPTIONS.find((cvl) => cvl.value === value).label;

export const formatSlashDate = (date: Date): string => formater(new Date(date), 'MM/dd/yyyy');

const processRow = (row: any[]) => {
  let finalVal = '';
  for (let j = 0; j < row.length; j++) {
    let innerValue = row[j] === null ? '' : row[j].toString();

    if (row[j] instanceof Date) {
      innerValue = row[j].toLocaleString();
    }

    if (innerValue.toLowerCase() === 'true') {
      innerValue = 'Si';
    }

    if (innerValue.toLowerCase() === 'false') {
      innerValue = 'No';
    }

    let result = innerValue.replace(/"/g, '""');

    if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
    if (j > 0) finalVal += ',';
    finalVal += result;
  }
  return finalVal + '\n';
};

export const exportToCsv = (filename: string, rows: any[]) => {
  let csvFile = '';
  for (let i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i]);
  }

  const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
  let link = document.createElement('a');

  if (link.download !== undefined) {
    // feature detection
    // Browsers that support HTML5 download attribute
    let url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const generateCSVData = (type: string, dataFromQuery: any[]) => {
  let csvRows: any[] = [];

  if (type === 'bimonthly') {
    // set headers
    csvRows = [
      ['', '', '', '', '', '', '', '', '', 'Educ. Artistica', '', 'Int. Personal y Social', '', '', '', '', ''],
      [
        'ID',
        'NyA',
        'Lengua',
        'Cs. Sociales',
        'Matematica',
        'Cs. Naturales',
        'Tecnologia',
        'Form Etica y Ciudadana	',
        'Ed. Fisica',
        'Plastica',
        'Musica',
        'Alumno en proyecto de int.',
        'Demuestra Preocupacion y esfuerzo personal',
        'Participa con responsabilidad en trabajo grupal',
        'Evidencia actitudes de solidaridad y colaboracion',
        'Respta las normas de convivencia',
        'Dias habiles',
        'Asistencia',
        'Inasistencia',
        '% Asistencia',
        'Observaciones',
      ],
    ];

    dataFromQuery.forEach((data, idx) => {
      const rowID = (idx + 1).toString();
      let rowData = [rowID, data.fullName];
      const keys = [
        'lengua',
        'ciencias_sociales',
        'matematica',
        'ciencias_naturales',
        'tecnologia',
        'formacion_etica_y_ciudadana',
        'educacion_fisica',
        'plastica',
        'musica',
        'integrated',
        'worry_and_effort',
        'group_responsibility',
        'solidarity_and_collaboration',
        'respect_rules',
        'available_days',
        'attendances',
        'unAttendances',
        'attendances_average',
        'description',
      ];

      keys.forEach((k) => {
        rowData.push(data[k]);
      });

      csvRows.push(rowData);
    });
  }

  return {
    csvRows,
  };
};
