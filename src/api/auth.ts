import { axiosInstance } from '../config/axios';
import { AuthStatusResponse } from '../types/auth';

export const fetchAuthStatus = async () => {
  return (await axiosInstance.get<AuthStatusResponse>('/auth/status')).data;
};
