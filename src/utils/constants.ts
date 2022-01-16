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
    title: 'Gestion de Asistencias',
    nextScreen: NAVIGATOR.attendances,
  },
  {
    title: 'Gestion de Calificaciones',
    nextScreen: NAVIGATOR.student_qualification,
  },
  {
    title: 'Gestion de Alumnos',
    nextScreen: NAVIGATOR.students,
  },
  {
    title: 'Gestion de Reportes',
    nextScreen: NAVIGATOR.reports,
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
  {
    sortKey: 'section',
    title: 'Seccion',
  },
  {
    sortKey: 'shift',
    title: 'Turno',
  },
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
