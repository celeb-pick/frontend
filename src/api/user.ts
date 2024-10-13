import { axiosInstance } from '../config/axios';
import { MyProfileResponse } from '../types/user';

export const fetchMyProfile = async () => {
  return (await axiosInstance.get<MyProfileResponse>('/users/me')).data;
};
