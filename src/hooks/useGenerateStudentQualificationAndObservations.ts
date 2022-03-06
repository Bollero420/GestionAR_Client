import { useMutation, useQueryClient } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/students/qualAndObs/';

type Request = {
  qualifications: {}[];
  observation: {};
  isEdit: boolean;
};

const generateStudentQualificationAndObservations = async (req: Request, student_id: string) => {
  const url = req.isEdit ? `${BASE_URL}${student_id}/update` : `${BASE_URL}${student_id}/create`;

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
};

export const useGenerateStudentQualificationAndObservations = (student_id: string) => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, Request>(
    (req) => generateStudentQualificationAndObservations(req, student_id),
    {
      mutationKey: 'generateAttendances',
      onSuccess: () => queryClient.invalidateQueries('student_qualification_and_observations'),
      onError: (error) => console.log('generateStudentQualificationAndObservations - error ->', error)
    }
  );
};
