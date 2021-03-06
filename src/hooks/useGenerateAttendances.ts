import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { axios } from '../config/axiosConfig';

const BASE_URL = '/attendances';

type Request = {
  attendances: {
    _id?: string;
    student_id: 'string';
    subject_id: 'string';
    state: boolean;
  }[];
};

const generateAttendances = async (req: Request, isEdit: boolean) => {
  const url = isEdit ? `${BASE_URL}/update` : `${BASE_URL}/add`;
  if (isEdit) {
    const response = await axios.put(url, req);
    return response.data;
  } else {
    const response = await axios.post(url, req);
    return response.data;
  }
};

export const useGenerateAttendances = (isEdit: boolean) => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError, Request>((req) => generateAttendances(req, isEdit), {
    mutationKey: 'generateAttendances',
    onSuccess: () => queryClient.invalidateQueries('atendances'),
    onError: (error) => console.log('generateAttendances - error ->', error),
  });
};
