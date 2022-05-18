import MockAdapter from 'axios-mock-adapter';
import { axios } from '../config/axiosConfig';
import { GRADES, SUBJECTS } from '../utils/constants';

export const mock = new MockAdapter(axios);

mock.onGet('/grades/').reply(200, GRADES);

mock.onGet('/subjects/').reply(200, SUBJECTS);

mock.onGet(/students\/\d+/).reply((config) => {
  const studentId = config.url.split('/')[2];

  let student = {};

  if (studentId === '17') {
    student = {
      _id: '17',
      firstName: 'Pedro',
      lastName: 'Lopez',
      dni: '49604567',
      birth_date: '22-03-2013',
      registration_number: '12345',
      grade_id: {
        _id: '1',
        shift: 'M',
        section: 'A',
        level: '2',
      },
      phone: '3413554112',
      address: 'Castellanos 320',
      neighborhood: 'Luis Agote',
      student_tutors: [
        {
          lastName: 'Lopez',
          firstName: 'Gerardo',
          dni: '23242365',
          phone: '3413665223',
          educational_level: 'SECONDARY',
          other_info: 'ACTIVE',
        },
        {
          lastName: 'Martinez',
          firstName: 'Gabriela',
          dni: '21837267',
          phone: '3413558002',
          educational_level: 'SECONDARY',
          other_info: 'ACTIVE',
        },
      ],
      school_dining: true,
      milk_cup: false,
      repeating_quantity: 0,
    };
  } else if (studentId === '998') {
    student = {
      _id: '998',
      firstName: 'Candela',
      lastName: 'Maldonado',
      dni: '49739482',
      birth_date: '12-08-2012',
      registration_number: '32975',
      grade_id: {
        shift: 'T',
        section: 'B',
        level: '2',
      },
      phone: '3415778663',
      address: 'Monteagudo 34',
      neighborhood: 'Refineria',
      student_tutors: [
        {
          lastName: 'Maldonado',
          firstName: 'Luis',
          dni: '18389184',
          phone: '3417226008',
          educational_level: 'UNIVERSITY',
          other_info: 'ACTIVE',
        },
        {
          lastName: 'Villanueva',
          firstName: 'Nuria',
          dni: '19382945',
          phone: '3413827492',
          educational_level: 'UNIVERSITY',
          other_info: 'ACTIVE',
        },
      ],
      school_dining: false,
      milk_cup: false,
      repeating_quantity: 0,
    };
  }

  return [200, student];
});

mock.onGet('/students/', { params: { grade_id: '1' } }).reply(200, [
  {
    _id: '10',
    lastName: 'Cordero',
    firstName: 'Matias',
    registration_number: '34234',
    grade_id: {
      _id: '1',
      level: 1,
      section: 'B',
      shift: 'T',
    },
  },
]);

mock.onGet('/students/', { params: { grade_id: '2', subject_id: undefined } }).reply(200, [
  {
    _id: '17',
    lastName: 'Pedro',
    firstName: 'Lopez',
    registration_number: '12345',
    section: 'A',
    shift: 'M',
  },
  {
    _id: '286',
    lastName: 'Toblerini',
    firstName: 'Julia',
    registration_number: '76234',
    section: 'A',
    shift: 'M',
  },
  {
    _id: '299',
    lastName: 'Surin',
    firstName: 'Nicolas',
    registration_number: '28839',
    section: 'A',
    shift: 'T',
  },
  {
    _id: '443',
    lastName: 'Antini',
    firstName: 'Kira',
    registration_number: '98229',
    section: 'B',
    shift: 'M',
  },
  {
    _id: '482',
    lastName: 'Raschetti',
    firstName: 'Lucia',
    registration_number: '28394',
    section: 'B',
    shift: 'T',
  },
  {
    _id: '759',
    lastName: 'Benitez',
    firstName: 'Silvia',
    registration_number: '37728',
    section: 'A',
    shift: 'M',
  },
  {
    _id: '119',
    lastName: 'Gomez',
    firstName: 'Manol',
    registration_number: '88293',
    section: 'A',
    shift: 'M',
  },
  {
    _id: '12',
    lastName: 'Colozzo',
    firstName: 'Luciana',
    registration_number: '64197',
    section: 'B',
    shift: 'M',
  },
  {
    _id: '67',
    lastName: 'Dominguez',
    firstName: 'Valentino',
    registration_number: '22123',
    section: 'A',
    shift: 'T',
  },
  {
    _id: '72',
    lastName: 'Bengochea',
    firstName: 'Federico',
    registration_number: '82930',
    section: 'A',
    shift: 'M',
  },
]);

mock.onGet('/students/', { params: { grade_id: '3', subject_id: '02' } }).reply(200, [
  {
    _id: '23',
    lastName: 'Rolon',
    firstName: 'Ambar',
    registration_number: '72839',
    section: 'B',
    shift: 'M',
  },
]);

mock.onGet('/students/', { params: { grade_id: '4', subject_id: '00' } }).reply(200, [
  {
    _id: '122',
    lastName: 'Amarillo',
    firstName: 'Lucia',
    registration_number: '57211',
    section: 'A',
    shift: 'T',
  },
]);

mock.onGet('/students/', { params: { grade_id: '5', subject_id: '01' } }).reply(200, [
  {
    _id: '47',
    lastName: 'Lucero',
    firstName: 'Tobias',
    registration_number: '12227',
    section: 'B',
    shift: 'T',
  },
]);

mock.onGet('/students/', { params: { grade_id: '6', subject_id: '00' } }).reply(200, [
  {
    _id: '234',
    lastName: 'Rojas',
    firstName: 'Sabrina',
    registration_number: '27783',
    section: 'A',
    shift: 'M',
  },
  {
    _id: '998',
    lastName: 'Maldonado',
    firstName: 'Candela',
    registration_number: '32975',
    section: 'B',
    shift: 'T',
  },
]);

mock.onGet('/students/', { params: { grade_id: '7', subject_id: '01' } }).reply(200, [
  {
    _id: '98',
    lastName: 'Bondero',
    firstName: 'Manuel',
    registration_number: '88112',
    section: 'B',
    shift: 'M',
  },
]);

mock.onPost('/auth/signIn').reply(200);

mock.onPost('/attendances/add').reply(200);

mock.onPost('/auth/signOut').reply(200);

mock.onPost('/subjectQualifications/add').reply(200);
