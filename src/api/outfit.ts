import { axiosInstance } from '../config/axios';
import type {
  OutfitItemListRequest,
  OutfitItemListResponse,
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

export const fetchOutfitItems = async (
  req?: OutfitItemListRequest,
  page?: number
) => {
  return (
    await axiosInstance.get<OutfitItemListResponse>('/outfit-items', {
      params: {
        ...req?.queryParams,
        page,
      },
    })
  ).data;
};
