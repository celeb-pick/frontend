import { axiosInstance } from '../config/axios';
import {
  MyScrapOutfitPostListRequest,
  MyScrapOutfitPostListResponse,
} from '../types/scrap';

export const fetchMyScrapOutfitPosts = async (
  req?: MyScrapOutfitPostListRequest,
  page?: number
) => {
  return (
    await axiosInstance.get<MyScrapOutfitPostListResponse>(
      '/users/me/outfit-posts/scraps',
      {
        params: {
          ...req?.queryParams,
          page,
        },
      }
    )
  ).data;
};

export const scrapOutfitPost = async (outfitPostId: number) => {
  await axiosInstance.post(`/outfit-posts/${outfitPostId}/scraps/`);
};

export const unscrapOutfitPost = async (outfitPostId: number) => {
  await axiosInstance.delete(`/outfit-posts/${outfitPostId}/scraps/`);
};

export const scrapOutfitItem = async (outfitItemId: number) => {
  await axiosInstance.post(`/outfit-items/${outfitItemId}/scraps/`);
};

export const unscrapOutfitItem = async (outfitItemId: number) => {
  await axiosInstance.delete(`/outfit-items/${outfitItemId}/scraps/`);
};
