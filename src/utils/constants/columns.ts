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
