import { useMutation } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/students/qualAndObs/';

type Request = {
  qualifications: {}[];
  observation: {};
  isEdit: boolean;
};

const generateStudentQualificationAndObservations = async (req: Request, student_id: string) => {
  try {
    const url = req.isEdit ? `${BASE_URL}:${student_id}/update` : `${BASE_URL}:${student_id}/add`;

    const request = {
      qualifications: req.qualifications,
      observation: req.observation,
    };

    if (req.isEdit) {
      const response = await axios.put(url, request);
      return response.data;
    } else {
      const response = await axios.post(url, request);
      return response.data;
    }
  } catch (error) {
    console.log('generateAttendances - error ->', error);
  }
};

export const useGenerateStudentQualificationAndObservations = (student_id: string) => {
  return useMutation<any, Error, Request>(
    (req) => generateStudentQualificationAndObservations(req, isEdit, student_id),
    {
      mutationKey: 'generateAttendances',
    }
  );
};
