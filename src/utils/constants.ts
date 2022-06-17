import { ReactComponent as ListIcon } from '../assets/icons/ListIcon.svg';
import { ReactComponent as QualificationIcon } from '../assets/icons/QualificationIcon.svg';
import { ReactComponent as ReportIcon } from '../assets/icons/ReportIcon.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/UsersIcon.svg';

import { QUALIFICATION } from '../components/common/Table/StudentsQualificationTable/StudentsQualificationFormTable';

export const NAVIGATOR = {
  main: '/main',
  attendances: '/management/attendances',
  grades: '/grades',
  sign_in: '/signIn',
  student_form: '/studentForm',
  reports: '/reports',
  student_qualification: '/management/studentQualification',
  students: '/management/students',
  subjects: '/subjects',
  forgot_password: '/forgotPassword',
};

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

export const STUDENTS_COLUMNS = [
  {
    sortKey: 'firstName',
    title: 'Nombre y Apellido',
  },
  {
    sortKey: 'registration_number',
    title: 'Legajo',
  },
  // {
  //   sortKey: 'section',
  //   title: 'Seccion',
  // },
  // {
  //   sortKey: 'shift',
  //   title: 'Turno',
  // },
];

export const ATTENDANCES_COLUMNS = [
  {
    sortKey: {
      first: 'student',
      second: 'firstName',
    },
    title: 'Nombre y Apellido',
  },
  {
    sortKey: 'registration_number',
    title: 'Legajo',
  },
  {
    sortKey: 'state',
    title: 'Estado',
  },
];

export const GRADES_COLUMNS = [
  {
    sortKey: 'level',
    title: 'Grado',
  },
  {
    sortKey: 'section',
    title: 'Seccion',
  },
  {
    sortKey: 'shift',
    title: 'Turno',
  },
];

export const SUBJECT_QUALIFICATION_FORM_COLUMNS = [
  {
    sortKey: {
      first: 'student',
      second: 'firstName',
    },
    title: 'Nombre y Apellido',
  },
  {
    sortKey: 'registration_number',
    title: 'Legajo',
  },
  {
    sortKey: 'qualification',
    title: 'Calificación',
  },
];

export const SUBJECT_QUALIFICATION_COLUMNS = [
  {
    sortKey: {
      first: 'student',
      second: 'firstName',
    },
    title: 'Nombre y Apellido',
  },
  {
    sortKey: 'registration_number',
    title: 'Legajo',
  },
  {
    sortKey: 'state',
    title: 'Estado',
  },
];

export const GRADES = [
  {
    _id: '1',
    level: 1,
    section: 'A',
    shift: 'TARDE',
  },
  {
    _id: '2',
    level: 3,
    section: 'B',
    shift: 'TARDE',
  },
  {
    _id: '3',
    level: 5,
    section: 'B',
    shift: 'MAÑANA',
  },
  {
    _id: '4',
    level: 6,
    section: 'A',
    shift: 'TARDE',
  },
];

export const SUBJECTS = [
  {
    _id: '00',
    name: 'CS.Naturales',
  },
  {
    _id: '01',
    name: 'Matematica',
  },
  {
    _id: '02',
    name: 'Lengua',
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

export const OBSERVATIONS = [
  {
    title: 'Demuestra preocupación y esfuerzo personal',
    key: 'worry_and_effort',
  },
  {
    title: 'Participa con responsabilidad en trabajo grupal',
    key: 'group_responsibility',
  },
  {
    title: 'Evidencia actitudes de solidaridad y colaboración',
    key: 'solidarity_and_collaboration',
  },
  {
    title: 'Respeta las normas de convivencia',
    key: 'respect_rules',
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
    label: 'Mañana',
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
    value: 'Afganistán',
    label: 'Afganistán',
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
    value: 'Azerbaiyán',
    label: 'Azerbaiyán',
  },
  {
    value: 'Bahamas',
    label: 'Bahamas',
  },
  {
    value: 'Bangladés',
    label: 'Bangladés',
  },
  {
    value: 'Barbados',
    label: 'Barbados',
  },
  {
    value: 'Baréin',
    label: 'Baréin',
  },
  {
    value: 'Bélgica',
    label: 'Bélgica',
  },
  {
    value: 'Belice',
    label: 'Belice',
  },
  {
    value: 'Benín',
    label: 'Benín',
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
    value: 'Brunéi',
    label: 'Brunéi',
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
    value: 'Bután',
    label: 'Bután',
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
    value: 'Camerún',
    label: 'Camerún',
  },
  {
    value: 'Canadá',
    label: 'Canadá',
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
    value: 'Emiratos Árabes Unidos',
    label: 'Emiratos Árabes Unidos',
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
    value: 'España',
    label: 'España',
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
    value: 'Etiopía',
    label: 'Etiopía',
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
    value: 'Gabón',
    label: 'Gabón',
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
    value: 'Guinea-Bisáu',
    label: 'Guinea-Bisáu',
  },
  {
    value: 'Haití',
    label: 'Haití',
  },
  {
    value: 'Honduras',
    label: 'Honduras',
  },
  {
    value: 'Hungría',
    label: 'Hungría',
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
    value: 'Irán',
    label: 'Irán',
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
    value: 'Islas Salomón',
    label: 'Islas Salomón',
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
    value: 'Japón',
    label: 'Japón',
  },
  {
    value: 'Jordania',
    label: 'Jordania',
  },
  {
    value: 'Kazajistán',
    label: 'Kazajistán',
  },
  {
    value: 'Kenia',
    label: 'Kenia',
  },
  {
    value: 'Kirguistán',
    label: 'Kirguistán',
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
    value: 'Líbano',
    label: 'Líbano',
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
    value: 'Malí',
    label: 'Malí',
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
    value: 'México',
    label: 'México',
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
    value: 'Mónaco',
    label: 'Mónaco',
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
    value: 'Níger',
    label: 'Níger',
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
    value: 'Omán',
    label: 'Omán',
  },
  {
    value: 'Países Bajos',
    label: 'Países Bajos',
  },
  {
    value: 'Pakistán',
    label: 'Pakistán',
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
    value: 'Panamá',
    label: 'Panamá',
  },
  {
    value: 'Papúa Nueva Guinea',
    label: 'Papúa Nueva Guinea',
  },
  {
    value: 'Paraguay',
    label: 'Paraguay',
  },
  {
    value: 'Perú',
    label: 'Perú',
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
    value: 'República Centroafricana',
    label: 'República Centroafricana',
  },
  {
    value: 'República Checa',
    label: 'República Checa',
  },
  {
    value: 'República de Macedonia',
    label: 'República de Macedonia',
  },
  {
    value: 'República del Congo',
    label: 'República del Congo',
  },
  {
    value: 'República Democrática del Congo',
    label: 'República Democrática del Congo',
  },
  {
    value: 'República Dominicana',
    label: 'República Dominicana',
  },
  {
    value: 'República Sudafricana',
    label: 'República Sudafricana',
  },
  {
    value: 'Ruanda',
    label: 'Ruanda',
  },
  {
    value: 'Rumanía',
    label: 'Rumanía',
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
    value: 'San Cristóbal y Nieves',
    label: 'San Cristóbal y Nieves',
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
    value: 'Santa Lucía',
    label: 'Santa Lucía',
  },
  {
    value: 'Santo Tomé y Príncipe',
    label: 'Santo Tomé y Príncipe',
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
    value: 'Sudán',
    label: 'Sudán',
  },
  {
    value: 'Sudán del Sur',
    label: 'Sudán del Sur',
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
    value: 'Tayikistán',
    label: 'Tayikistán',
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
    value: 'Túnez',
    label: 'Túnez',
  },
  {
    value: 'Turkmenistán',
    label: 'Turkmenistán',
  },
  {
    value: 'Turquía',
    label: 'Turquía',
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
    value: 'Uzbekistán',
    label: 'Uzbekistán',
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
  {
    value: 'Alejandra',
    label: 'Alejandra',
  },
  {
    value: 'Armstrong',
    label: 'Armstrong',
  },
  {
    value: 'Arocena',
    label: 'Arocena',
  },
  {
    value: 'Arroyo Seco',
    label: 'Arroyo Seco',
  },
  {
    value: 'Arroyo Leyes',
    label: 'Arroyo Leyes',
  },
  {
    value: 'Avellaneda',
    label: 'Avellaneda',
  },
  {
    value: 'Barrancas',
    label: 'Barrancas',
  },
  {
    value: 'Carcaraña',
    label: 'Carcaraña',
  },
  {
    value: 'Casilda',
    label: 'Casilda',
  },
  {
    value: 'Cayasta',
    label: 'Cayasta',
  },
  {
    value: 'Cañada de Gomez',
    label: 'Cañada de Gomez',
  },
  {
    value: 'Ceres',
    label: 'Ceres',
  },
  {
    value: 'Chabas',
    label: 'Chabas',
  },
  {
    value: 'Coronda',
    label: 'Coronda',
  },
  {
    value: 'Desvio Arijon',
    label: 'Desvio Arijon',
  },
  {
    value: 'Elortondo',
    label: 'Elortondo',
  },
  {
    value: 'Esperanza',
    label: 'Esperanza',
  },
  {
    value: 'Firmat',
    label: 'Firmat',
  },
  {
    value: 'Florencia',
    label: 'Florencia',
  },
  {
    value: 'Franck',
    label: 'Franck',
  },
  {
    value: 'Funes',
    label: 'Funes',
  },
  {
    value: 'Granadero Baigorria',
    label: 'Granadero Baigorria',
  },
  {
    value: 'Helvecia',
    label: 'Helvecia',
  },
  {
    value: 'Melincue',
    label: 'Melincue',
  },
  {
    value: 'Monje',
    label: 'Monje',
  },
  {
    value: 'Oliveros',
    label: 'Oliveros',
  },
  {
    value: 'Puerto Gaboto',
    label: 'Puerto Gaboto',
  },
  {
    value: 'Rafaela',
    label: 'Rafaela',
  },
  {
    value: 'Reconquista',
    label: 'Reconquista',
  },
  {
    value: 'Romang',
    label: 'Romang',
  },
  {
    value: 'Rosario',
    label: 'Rosario',
  },
  {
    value: 'Rufino',
    label: 'Rufino',
  },
  {
    value: 'San Carlos',
    label: 'San Carlos',
  },
  {
    value: 'San Cristobal',
    label: 'San Cristobal',
  },
  {
    value: 'San Javier',
    label: 'San Javier',
  },
  {
    value: 'San Jorge',
    label: 'San Jorge',
  },
  {
    value: 'San Jose del Rincon',
    label: 'San Jose del Rincon',
  },
  {
    value: 'San Justo',
    label: 'San Justo',
  },
  {
    value: 'San Lorenzo',
    label: 'San Lorenzo',
  },
  {
    value: 'Santa Fe Capital',
    label: 'Santa Fe Capital',
  },
  {
    value: 'Santa Rosa de Calchines',
    label: 'Santa Rosa de Calchines',
  },
  {
    value: 'Santo Tome',
    label: 'Santo Tome',
  },
  {
    value: 'Sastre',
    label: 'Sastre',
  },
  {
    value: 'Sauce Viejo',
    label: 'Sauce Viejo',
  },
  {
    value: 'Sunchales',
    label: 'Sunchales',
  },
  {
    value: 'Timbues',
    label: 'Timbues',
  },
  {
    value: 'Tostado',
    label: 'Tostado',
  },
  {
    value: 'Venado Tuerto',
    label: 'Venado Tuerto',
  },
  {
    value: 'Villa Cañas',
    label: 'Villa Cañas',
  },
  {
    value: 'Villa Constitucion',
    label: 'Villa Constitucion',
  },
  {
    value: 'Villa Ocampo',
    label: 'Villa Ocampo',
  },
];

export const requiredValidation = { required: 'Requerido' };

const dniValidation = {
  pattern: {
    value: /^[0-9]{8}$/,
    message: 'Formato de DNI invalido',
  },
};

export const requiredDniValidation = {
  ...requiredValidation,
  ...dniValidation,
};

export const onlyNumbersValidation = {
  pattern: {
    value: /^[0-9]*$/,
    message: 'Ingrese solo numeros',
  },
};

export const requiredOnlyNumbersValidation = {
  ...requiredValidation,
  ...onlyNumbersValidation,
};

const emailValidation = {
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Mail invalido',
  },
};

export const requiredEmailValidation = {
  ...requiredValidation,
  ...emailValidation,
};

const letterAndSpacesValidation = {
  pattern: {
    value: /^[a-zA-Z\s]*$/,
    message: 'Ingrese solo letras y espacios',
  },
};

export const requiredLetterAndSpacesValidation = {
  ...requiredValidation,
  ...letterAndSpacesValidation,
};

export const unAuthenticatedRoutes = ['/signin', '/forgotpassword', '/studentform'];

export const STUDENT_PROFILE_FIRST_COLUMN = [
  {
    label: 'APELLIDO',
    value: 'lastName',
  },
  {
    label: 'NOMBRE',
    value: 'firstName',
  },
  {
    label: 'DNI',
    value: 'dni',
  },
  {
    label: 'SEXO',
    value: 'gender',
  },
  {
    label: 'REPITENTE',
    value: 'repeating_quantity',
  },
  {
    label: 'FECHA DE NACIMIENTO',
    value: 'birth_date',
  },
  {
    label: 'NACIONALIDAD',
    value: 'country',
  },
  {
    label: 'ESCUELA A LA QUE ASISTIO',
    value: 'previous_school',
  },
  {
    label: 'TELEFONO',
    value: 'phone',
  },
  {
    label: 'TELEFONO ALT.',
    value: 'alternative_phone',
  },
];

export const STUDENT_PROFILE_SECOND_COLUMN = [
  {
    label: 'DISCAPACIDAD',
    value: 'disability_type',
  },
  {
    label: 'TIPO DISCAPACIDAD',
    value: 'disability_type',
  },
  {
    label: 'COMEDOR ESC.',
    value: 'school_dining',
  },
  {
    label: 'COOPERADORA',
    value: 'cooperator',
  },
  {
    label: 'DIRECCION',
    value: 'address',
  },
  {
    label: 'BARRIO',
    value: 'neighborhood',
  },
  {
    label: 'LOCALIDAD',
    value: 'location',
  },
  {
    label: 'CENTRO DE SALUD',
    value: 'medical_center',
  },
];

export const STUDENT_TUTOR_FIRST_COLUMN = [
  {
    label: 'APELLIDO',
    value: 'lastName',
  },
  {
    label: 'NOMBRE',
    value: 'firstName',
  },
  {
    label: 'DNI',
    value: 'dni',
  },
  {
    label: 'SEXO',
    value: 'gender',
  },
  {
    label: 'ESTADO CIVIL',
    value: 'civil_status',
  },
  {
    label: 'FECHA DE NACIMIENTO',
    value: 'birth_date',
  },
  {
    label: 'NACIONALIDAD',
    value: 'country',
  },
  {
    label: 'EMAIL',
    value: 'email_address',
  },
];

export const STUDENT_TUTOR_SECOND_COLUMN = [
  {
    label: 'TELEFONO FIJO',
    value: 'phone',
  },
  {
    label: 'CELULAR',
    value: 'alternative_phone',
  },
  {
    label: 'TIPO ESCOLARIDAD',
    value: 'educational_level',
  },
  {
    label: 'OCUPACION LABORAL',
    value: 'job',
  },
  {
    label: 'DIRECCION',
    value: 'address',
  },
  {
    label: 'LOCALIDAD',
    value: 'location',
  },
  {
    label: 'EMAIL',
    value: 'email_address',
  },
];
