import { useMutation } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/subjectQualifications';

const generateSubjectQualification = async (req) => {
  try {
    const response = await axios.post(`${BASE_URL}/add`, req);
    return response.data;
  } catch (error) {
    console.log('generateSubjectQualification - error ->', error);
  }
};

export const useGenerateSubjectQualification = () => {
  return useMutation<any, Error, any>((req) => generateSubjectQualification(req), {
    mutationKey: 'generateSubjectQualification',
  });
};
