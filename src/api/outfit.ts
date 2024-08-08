import { axiosInstance } from '../config/axios';
import type {
  OutfitPostListRequest,
  OutfitPostListResponse,
} from '../types/outfit';

export const fetchOutfitPosts = async (
  req?: OutfitPostListRequest,
  page?: number
) => {
  return (
    await axiosInstance.get<OutfitPostListResponse>('/outfit-posts', {
      params: {
        ...req?.queryParams,
        page,
      },
    })
  ).data;
};
