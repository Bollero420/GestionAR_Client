import { useMutation } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/students';

const registerStudent = async (req) => {
  const response = await axios.post(`${BASE_URL}/add`, req);
  return response.data;
};

export const useStudentRegistration = () => {
  return useMutation<any, Error, any>((req) => registerStudent(req), {
    mutationKey: 'student_register',
    onError: (error) => console.log('registerStudent - error ->', error)
  });
};
