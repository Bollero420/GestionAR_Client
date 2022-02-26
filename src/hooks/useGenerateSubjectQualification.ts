import { useMutation } from 'react-query';

import { axios } from '../config/axiosConfig';
import { QUALIFICATION } from '../components/common/Table/StudentsQualificationTable/StudentsQualificationFormTable';

const BASE_URL = '/subjectQualifications';

type Request = {
  qualifications: {
    _id: string;
    student_id: string;
    subject_id: string;
    bimonthly_date: string | Date;
    value: QUALIFICATION;
  }[];
};

const generateSubjectQualification = async (req: Request, isEdit: boolean) => {
  try {
    const url = isEdit ? `${BASE_URL}/update` : `${BASE_URL}/add`;
    if (isEdit) {
      const response = await axios.put(url, req);
      return response.data;
    } else {
      const response = await axios.post(url, req);
      return response.data;
    }
  } catch (error) {
    console.log('generateSubjectQualification - error ->', error);
  }
};

export const useGenerateSubjectQualification = (isEdit: boolean) => {
  return useMutation<any, Error, Request>((req) => generateSubjectQualification(req, isEdit), {
    mutationKey: 'generateSubjectQualification',
  });
};
