import { ReactComponent as ListIcon } from '../../assets/icons/ListIcon.svg';
import { ReactComponent as QualificationIcon } from '../../assets/icons/QualificationIcon.svg';
import { ReactComponent as ReportIcon } from '../../assets/icons/ReportIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/icons/UsersIcon.svg';

import { QUALIFICATION } from '../../components/common/Table/StudentsQualificationTable/StudentsQualificationFormTable';

import { NAVIGATOR } from '.';

export const ALL_GRADES_OPTIONS = [
  {
    title: '1ero',
  },
  {
    title: '2ndo',
  },
  {
    title: '3ero',
  },
  {
    title: '4to',
  },
  {
    title: '5to',
  },
  {
    title: '6to',
  },
];

export const ALL_REPORTS_OPTIONS = [
  { title: 'Reportes Mensuales' },
  { title: 'Reportes Bimestrales' },
  { title: 'Reportes Anual - Inicial' },
  { title: 'Reportes Anual - Final' },
];

export const MAIN_MENU_OPTIONS = [
  {
    title: 'Gestion de Alumnos',
    nextScreen: NAVIGATOR.students,
    Icon: UsersIcon,
  },
  {
    title: 'Gestion de Asistencias',
    nextScreen: NAVIGATOR.attendances,
    Icon: ListIcon,
  },
  {
    title: 'Gestion de Calificaciones',
    nextScreen: NAVIGATOR.student_qualification,
    Icon: QualificationIcon,
  },
  {
    title: 'Gestion de Reportes',
    nextScreen: NAVIGATOR.reports,
    Icon: ReportIcon,
  },
];

export const QUALIFICATION_OPTIONS = [
  {
    value: QUALIFICATION.EXC,
    label: QUALIFICATION.EXC,
  },
  {
    value: QUALIFICATION.MB,
    label: QUALIFICATION.MB,
  },
  {
    value: QUALIFICATION.B,
    label: QUALIFICATION.B,
  },
  {
    value: QUALIFICATION.S,
    label: QUALIFICATION.S,
  },
  {
    value: QUALIFICATION.NS,
    label: QUALIFICATION.NS,
  },
];

export const GRADES_SELECT_OPTIONS = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
];

export const SECTION_SELECT_OPTIONS = [
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
  },
];

export const SHIFT_SELECT_OPTIONS = [
  {
    value: 'M',
    label: 'Ma??ana',
  },
  {
    value: 'T',
    label: 'Tarde',
  },
];

export const YES_AND_NO_OPTIONS = [
  {
    value: 'YES',
    label: 'Si',
  },
  {
    value: 'NO',
    label: 'No',
  },
];

export const SERVICE_OPTIONS = [
  {
    value: '1',
    label: 'Copa de Leche',
  },
  {
    value: '2',
    label: 'Almuerzo',
  },
  {
    value: '3',
    label: 'Ambos',
  },
];

export const REPEATING_QUANTITY_OPTIONS = [
  {
    value: '0',
    label: 'No',
  },
  {
    value: '1',
    label: '1 vez',
  },
  {
    value: '2',
    label: '2 veces',
  },
  {
    value: '3',
    label: '3 veces',
  },
  {
    value: '4',
    label: '4 veces',
  },
];

export const GENDER_OPTIONS = [
  {
    value: 'FEMALE',
    label: 'Femenino',
  },
  {
    value: 'MALE',
    label: 'Masculino',
  },
];

export const CIVIL_STATUS_OPTIONS = [
  {
    value: 'SINGLE',
    label: 'Soltero/a',
  },
  {
    value: 'MARRIED',
    label: 'Casado/a',
  },
  {
    value: 'DIVORCED',
    label: 'Divorciado/a',
  },
  {
    value: 'WIDOWER',
    label: 'Viudo/a',
  },
];

export const EDUCATIONAL_LEVEL_OPTIONS = [
  {
    value: 'PRIMARY',
    label: 'Primaria',
  },
  {
    value: 'SECONDARY',
    label: 'Secundaria',
  },
  {
    value: 'UNIVERSITY',
    label: 'Universidad',
  },
];

export const OTHER_INFO_OPTIONS = [
  {
    value: 'ACTIVE',
    label: 'Activo',
  },
  {
    value: 'RETIRED',
    label: 'Jubilado',
  },
  {
    value: 'PLAN',
    label: 'Plan o beneficiosocial',
  },
];

export const COUNTRIES_OPTIONS = [
  {
    value: 'Afganist??n',
    label: 'Afganist??n',
  },
  {
    value: 'Albania',
    label: 'Albania',
  },
  {
    value: 'Alemania',
    label: 'Alemania',
  },
  {
    value: 'Andorra',
    label: 'Andorra',
  },
  {
    value: 'Angola',
    label: 'Angola',
  },
  {
    value: 'Antigua y Barbuda',
    label: 'Antigua y Barbuda',
  },
  {
    value: 'Arabia Saudita',
    label: 'Arabia Saudita',
  },
  {
    value: 'Argelia',
    label: 'Argelia',
  },
  {
    value: 'Argentina',
    label: 'Argentina',
  },
  {
    value: 'Armenia',
    label: 'Armenia',
  },
  {
    value: 'Australia',
    label: 'Australia',
  },
  {
    value: 'Austria',
    label: 'Austria',
  },
  {
    value: 'Azerbaiy??n',
    label: 'Azerbaiy??n',
  },
  {
    value: 'Bahamas',
    label: 'Bahamas',
  },
  {
    value: 'Banglad??s',
    label: 'Banglad??s',
  },
  {
    value: 'Barbados',
    label: 'Barbados',
  },
  {
    value: 'Bar??in',
    label: 'Bar??in',
  },
  {
    value: 'B??lgica',
    label: 'B??lgica',
  },
  {
    value: 'Belice',
    label: 'Belice',
  },
  {
    value: 'Ben??n',
    label: 'Ben??n',
  },
  {
    value: 'Bielorrusia',
    label: 'Bielorrusia',
  },
  {
    value: 'Birmania',
    label: 'Birmania',
  },
  {
    value: 'Bolivia',
    label: 'Bolivia',
  },
  {
    value: 'Bosnia y Herzegovina',
    label: 'Bosnia y Herzegovina',
  },
  {
    value: 'Botsuana',
    label: 'Botsuana',
  },
  {
    value: 'Brasil',
    label: 'Brasil',
  },
  {
    value: 'Brun??i',
    label: 'Brun??i',
  },
  {
    value: 'Bulgaria',
    label: 'Bulgaria',
  },
  {
    value: 'Burkina Faso',
    label: 'Burkina Faso',
  },
  {
    value: 'Burundi',
    label: 'Burundi',
  },
  {
    value: 'But??n',
    label: 'But??n',
  },
  {
    value: 'Cabo Verde',
    label: 'Cabo Verde',
  },
  {
    value: 'Camboya',
    label: 'Camboya',
  },
  {
    value: 'Camer??n',
    label: 'Camer??n',
  },
  {
    value: 'Canad??',
    label: 'Canad??',
  },
  {
    value: 'Catar',
    label: 'Catar',
  },
  {
    value: 'Chad',
    label: 'Chad',
  },
  {
    value: 'Chile',
    label: 'Chile',
  },
  {
    value: 'China',
    label: 'China',
  },
  {
    value: 'Chipre',
    label: 'Chipre',
  },
  {
    value: 'Ciudad del Vaticano',
    label: 'Ciudad del Vaticano',
  },
  {
    value: 'Colombia',
    label: 'Colombia',
  },
  {
    value: 'Comoras',
    label: 'Comoras',
  },
  {
    value: 'Corea del Norte',
    label: 'Corea del Norte',
  },
  {
    value: 'Corea del Sur',
    label: 'Corea del Sur',
  },
  {
    value: 'Costa de Marfil',
    label: 'Costa de Marfil',
  },
  {
    value: 'Costa Rica',
    label: 'Costa Rica',
  },
  {
    value: 'Croacia',
    label: 'Croacia',
  },
  {
    value: 'Cuba',
    label: 'Cuba',
  },
  {
    value: 'Dinamarca',
    label: 'Dinamarca',
  },
  {
    value: 'Dominica',
    label: 'Dominica',
  },
  {
    value: 'Ecuador',
    label: 'Ecuador',
  },
  {
    value: 'Egipto',
    label: 'Egipto',
  },
  {
    value: 'El Salvador',
    label: 'El Salvador',
  },
  {
    value: 'Emiratos ??rabes Unidos',
    label: 'Emiratos ??rabes Unidos',
  },
  {
    value: 'Eritrea',
    label: 'Eritrea',
  },
  {
    value: 'Eslovaquia',
    label: 'Eslovaquia',
  },
  {
    value: 'Eslovenia',
    label: 'Eslovenia',
  },
  {
    value: 'Espa??a',
    label: 'Espa??a',
  },
  {
    value: 'Estados Unidos',
    label: 'Estados Unidos',
  },
  {
    value: 'Estonia',
    label: 'Estonia',
  },
  {
    value: 'Etiop??a',
    label: 'Etiop??a',
  },
  {
    value: 'Filipinas',
    label: 'Filipinas',
  },
  {
    value: 'Finlandia',
    label: 'Finlandia',
  },
  {
    value: 'Fiyi',
    label: 'Fiyi',
  },
  {
    value: 'Francia',
    label: 'Francia',
  },
  {
    value: 'Gab??n',
    label: 'Gab??n',
  },
  {
    value: 'Gambia',
    label: 'Gambia',
  },
  {
    value: 'Georgia',
    label: 'Georgia',
  },
  {
    value: 'Ghana',
    label: 'Ghana',
  },
  {
    value: 'Granada',
    label: 'Granada',
  },
  {
    value: 'Grecia',
    label: 'Grecia',
  },
  {
    value: 'Guatemala',
    label: 'Guatemala',
  },
  {
    value: 'Guyana',
    label: 'Guyana',
  },
  {
    value: 'Guinea',
    label: 'Guinea',
  },
  {
    value: 'Guinea ecuatorial',
    label: 'Guinea ecuatorial',
  },
  {
    value: 'Guinea-Bis??u',
    label: 'Guinea-Bis??u',
  },
  {
    value: 'Hait??',
    label: 'Hait??',
  },
  {
    value: 'Honduras',
    label: 'Honduras',
  },
  {
    value: 'Hungr??a',
    label: 'Hungr??a',
  },
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'Indonesia',
    label: 'Indonesia',
  },
  {
    value: 'Irak',
    label: 'Irak',
  },
  {
    value: 'Ir??n',
    label: 'Ir??n',
  },
  {
    value: 'Irlanda',
    label: 'Irlanda',
  },
  {
    value: 'Islandia',
    label: 'Islandia',
  },
  {
    value: 'Islas Marshall',
    label: 'Islas Marshall',
  },
  {
    value: 'Islas Salom??n',
    label: 'Islas Salom??n',
  },
  {
    value: 'Israel',
    label: 'Israel',
  },
  {
    value: 'Italia',
    label: 'Italia',
  },
  {
    value: 'Jamaica',
    label: 'Jamaica',
  },
  {
    value: 'Jap??n',
    label: 'Jap??n',
  },
  {
    value: 'Jordania',
    label: 'Jordania',
  },
  {
    value: 'Kazajist??n',
    label: 'Kazajist??n',
  },
  {
    value: 'Kenia',
    label: 'Kenia',
  },
  {
    value: 'Kirguist??n',
    label: 'Kirguist??n',
  },
  {
    value: 'Kiribati',
    label: 'Kiribati',
  },
  {
    value: 'Kuwait',
    label: 'Kuwait',
  },
  {
    value: 'Laos',
    label: 'Laos',
  },
  {
    value: 'Lesoto',
    label: 'Lesoto',
  },
  {
    value: 'Letonia',
    label: 'Letonia',
  },
  {
    value: 'L??bano',
    label: 'L??bano',
  },
  {
    value: 'Liberia',
    label: 'Liberia',
  },
  {
    value: 'Libia',
    label: 'Libia',
  },
  {
    value: 'Liechtenstein',
    label: 'Liechtenstein',
  },
  {
    value: 'Lituania',
    label: 'Lituania',
  },
  {
    value: 'Luxemburgo',
    label: 'Luxemburgo',
  },
  {
    value: 'Madagascar',
    label: 'Madagascar',
  },
  {
    value: 'Malasia',
    label: 'Malasia',
  },
  {
    value: 'Malaui',
    label: 'Malaui',
  },
  {
    value: 'Maldivas',
    label: 'Maldivas',
  },
  {
    value: 'Mal??',
    label: 'Mal??',
  },
  {
    value: 'Malta',
    label: 'Malta',
  },
  {
    value: 'Marruecos',
    label: 'Marruecos',
  },
  {
    value: 'Mauricio',
    label: 'Mauricio',
  },
  {
    value: 'Mauritania',
    label: 'Mauritania',
  },
  {
    value: 'M??xico',
    label: 'M??xico',
  },
  {
    value: 'Micronesia',
    label: 'Micronesia',
  },
  {
    value: 'Moldavia',
    label: 'Moldavia',
  },
  {
    value: 'M??naco',
    label: 'M??naco',
  },
  {
    value: 'Mongolia',
    label: 'Mongolia',
  },
  {
    value: 'Montenegro',
    label: 'Montenegro',
  },
  {
    value: 'Mozambique',
    label: 'Mozambique',
  },
  {
    value: 'Namibia',
    label: 'Namibia',
  },
  {
    value: 'Nauru',
    label: 'Nauru',
  },
  {
    value: 'Nepal',
    label: 'Nepal',
  },
  {
    value: 'Nicaragua',
    label: 'Nicaragua',
  },
  {
    value: 'N??ger',
    label: 'N??ger',
  },
  {
    value: 'Nigeria',
    label: 'Nigeria',
  },
  {
    value: 'Noruega',
    label: 'Noruega',
  },
  {
    value: 'Nueva Zelanda',
    label: 'Nueva Zelanda',
  },
  {
    value: 'Om??n',
    label: 'Om??n',
  },
  {
    value: 'Pa??ses Bajos',
    label: 'Pa??ses Bajos',
  },
  {
    value: 'Pakist??n',
    label: 'Pakist??n',
  },
  {
    value: 'Palaos',
    label: 'Palaos',
  },
  {
    value: 'Palestina',
    label: 'Palestina',
  },
  {
    value: 'Panam??',
    label: 'Panam??',
  },
  {
    value: 'Pap??a Nueva Guinea',
    label: 'Pap??a Nueva Guinea',
  },
  {
    value: 'Paraguay',
    label: 'Paraguay',
  },
  {
    value: 'Per??',
    label: 'Per??',
  },
  {
    value: 'Polonia',
    label: 'Polonia',
  },
  {
    value: 'Portugal',
    label: 'Portugal',
  },
  {
    value: 'Reino Unido',
    label: 'Reino Unido',
  },
  {
    value: 'Rep??blica Centroafricana',
    label: 'Rep??blica Centroafricana',
  },
  {
    value: 'Rep??blica Checa',
    label: 'Rep??blica Checa',
  },
  {
    value: 'Rep??blica de Macedonia',
    label: 'Rep??blica de Macedonia',
  },
  {
    value: 'Rep??blica del Congo',
    label: 'Rep??blica del Congo',
  },
  {
    value: 'Rep??blica Democr??tica del Congo',
    label: 'Rep??blica Democr??tica del Congo',
  },
  {
    value: 'Rep??blica Dominicana',
    label: 'Rep??blica Dominicana',
  },
  {
    value: 'Rep??blica Sudafricana',
    label: 'Rep??blica Sudafricana',
  },
  {
    value: 'Ruanda',
    label: 'Ruanda',
  },
  {
    value: 'Ruman??a',
    label: 'Ruman??a',
  },
  {
    value: 'Rusia',
    label: 'Rusia',
  },
  {
    value: 'Samoa',
    label: 'Samoa',
  },
  {
    value: 'San Crist??bal y Nieves',
    label: 'San Crist??bal y Nieves',
  },
  {
    value: 'San Marino',
    label: 'San Marino',
  },
  {
    value: 'San Vicente y las Granadinas',
    label: 'San Vicente y las Granadinas',
  },
  {
    value: 'Santa Luc??a',
    label: 'Santa Luc??a',
  },
  {
    value: 'Santo Tom?? y Pr??ncipe',
    label: 'Santo Tom?? y Pr??ncipe',
  },
  {
    value: 'Senegal',
    label: 'Senegal',
  },
  {
    value: 'Serbia',
    label: 'Serbia',
  },
  {
    value: 'Seychelles',
    label: 'Seychelles',
  },
  {
    value: 'Sierra Leona',
    label: 'Sierra Leona',
  },
  {
    value: 'Singapur',
    label: 'Singapur',
  },
  {
    value: 'Siria',
    label: 'Siria',
  },
  {
    value: 'Somalia',
    label: 'Somalia',
  },
  {
    value: 'Sri Lanka',
    label: 'Sri Lanka',
  },
  {
    value: 'Suazilandia',
    label: 'Suazilandia',
  },
  {
    value: 'Sud??n',
    label: 'Sud??n',
  },
  {
    value: 'Sud??n del Sur',
    label: 'Sud??n del Sur',
  },
  {
    value: 'Suecia',
    label: 'Suecia',
  },
  {
    value: 'Suiza',
    label: 'Suiza',
  },
  {
    value: 'Surinam',
    label: 'Surinam',
  },
  {
    value: 'Tailandia',
    label: 'Tailandia',
  },
  {
    value: 'Tanzania',
    label: 'Tanzania',
  },
  {
    value: 'Tayikist??n',
    label: 'Tayikist??n',
  },
  {
    value: 'Timor Oriental',
    label: 'Timor Oriental',
  },
  {
    value: 'Togo',
    label: 'Togo',
  },
  {
    value: 'Tonga',
    label: 'Tonga',
  },
  {
    value: 'Trinidad y Tobago',
    label: 'Trinidad y Tobago',
  },
  {
    value: 'T??nez',
    label: 'T??nez',
  },
  {
    value: 'Turkmenist??n',
    label: 'Turkmenist??n',
  },
  {
    value: 'Turqu??a',
    label: 'Turqu??a',
  },
  {
    value: 'Tuvalu',
    label: 'Tuvalu',
  },
  {
    value: 'Ucrania',
    label: 'Ucrania',
  },
  {
    value: 'Uganda',
    label: 'Uganda',
  },
  {
    value: 'Uruguay',
    label: 'Uruguay',
  },
  {
    value: 'Uzbekist??n',
    label: 'Uzbekist??n',
  },
  {
    value: 'Vanuatu',
    label: 'Vanuatu',
  },
  {
    value: 'Venezuela',
    label: 'Venezuela',
  },
  {
    value: 'Vietnam',
    label: 'Vietnam',
  },
  {
    value: 'Yemen',
    label: 'Yemen',
  },
  {
    value: 'Yibuti',
    label: 'Yibuti',
  },
  {
    value: 'Zambia',
    label: 'Zambia',
  },
  {
    value: 'Zimbabue',
    label: 'Zimbabue',
  },
];

export const LOCATION_OPTIONS = [
  { value: 'Misiones', label: 'Misiones' },
  { value: 'San Luis', label: 'San Luis' },
  { value: 'San Juan', label: 'San Juan' },
  { value: 'Entre R??os', label: 'Entre R??os' },
  { value: 'Santa Cruz', label: 'Santa Cruz' },
  { value: 'R??o Negro', label: 'R??o Negro' },
  { value: 'Chubut', label: 'Chubut' },
  { value: 'C??rdoba', label: 'C??rdoba' },
  { value: 'Mendoza', label: 'Mendoza' },
  { value: 'La Rioja', label: 'La Rioja' },
  { value: 'Catamarca', label: 'Catamarca' },
  { value: 'La Pampa', label: 'La Pampa' },
  { value: 'Santiago del Estero', label: 'Santiago del Estero' },
  { value: 'Corrientes', label: 'Corrientes' },
  { value: 'Santa Fe', label: 'Santa Fe' },
  { value: 'Tucum??n', label: 'Tucum??n' },
  { value: 'Neuqu??n', label: 'Neuqu??n' },
  { value: 'Salta', label: 'Salta' },
  { value: 'Chaco', label: 'Chaco' },
  { value: 'Formosa', label: 'Formosa' },
  { value: 'Jujuy', label: 'Jujuy' },
  { value: 'Ciudad Aut??noma de Buenos Aires', label: 'Ciudad Aut??noma de Buenos Aires' },
  { value: 'Buenos Aires', label: 'Buenos Aires' },
  { value: 'Tierra del Fuego', label: 'Tierra del Fuego' },
];

export const YEARS_OPTIONS = [
  { value: 2021, label: '2021' },
  { value: 2022, label: '2022' },
  { value: 2023, label: '2023' },
];

export const MONTHS_OPTIONS = [
  { value: 1, label: 'Enero' },
  { value: 2, label: 'Febrero' },
  { value: 3, label: 'Marzo' },
  { value: 4, label: 'Abril' },
  { value: 5, label: 'Mayo' },
  { value: 6, label: 'Junio' },
  { value: 7, label: 'Julio' },
  { value: 8, label: 'Agosto' },
  { value: 9, label: 'Septiembre' },
  { value: 10, label: 'Octubre' },
  { value: 11, label: 'Noviembre' },
  { value: 12, label: 'Diciembre' },
];
