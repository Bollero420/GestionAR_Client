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

export const requiredValidation = { required: 'Requerido' };

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

export const unAuthenticatedRoutes = ['/signin', '/forgotpassword', '/studentform'];
