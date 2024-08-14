import { axiosInstance } from '../config/axios';

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
