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

export const unAuthenticatedRoutes = ['/signin', '/forgotpassword', '/studentform'];
