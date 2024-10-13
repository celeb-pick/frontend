import { axiosInstance } from '../config/axios';
import {
  MyOutfitPostListRequest,
  MyOutfitPostListResponse,
  MyProfileResponse,
} from '../types/user';

export const fetchMyProfile = async () => {
  return (await axiosInstance.get<MyProfileResponse>('/users/me')).data;
};

export const fetchMyOutfitPosts = async (
  req?: MyOutfitPostListRequest,
  page?: number
) => {
  return (
    await axiosInstance.get<MyOutfitPostListResponse>(
      '/users/me/outfit-posts',
      {
        params: {
          ...req?.queryParams,
          page,
        },
      }
    )
  ).data;
};
