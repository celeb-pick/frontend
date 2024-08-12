import { axiosInstance } from '../config/axios';
import { AuthStatusResponse, LoginRequest, SignupRequest } from '../types/auth';

export const fetchAuthStatus = async () => {
  return (await axiosInstance.get<AuthStatusResponse>('/auth/status')).data;
};

export const login = async ({ payload }: LoginRequest) => {
  await axiosInstance.post('/login/', payload);
};

export const signup = async ({ payload }: SignupRequest) => {
  await axiosInstance.post('/signup/', payload);
};
