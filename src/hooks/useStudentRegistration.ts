import { useMutation } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/auth';

const registerStudent = async (req) => {
  try {
    const response = await axios.post(`${BASE_URL}/students/add`, req);
    return response.data;
  } catch (error) {
    console.log('registerStudent - error ->', error);
  }
};

export const useStudentRegistration = () => {
  return useMutation<any, Error, any>((req) => registerStudent(req), {
    mutationKey: 'student_register',
  });
};
