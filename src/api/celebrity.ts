import { axiosInstance } from '../config/axios';
import type {
  CelebrityListRequest,
  CelebrityListResponse,
  CreateCelebrityRequest,
  CreateCelebrityResponse,
} from '../types/celebrity';

export const fetchCelebrities = async (
  req?: CelebrityListRequest,
  page?: number
) => {
  return (
    await axiosInstance.get<CelebrityListResponse>('/celebrities', {
      params: {
        ...req?.queryParams,
        page,
        pageSize: 16,
      },
    })
  ).data;
};

export const createCelebrity = async ({ payload }: CreateCelebrityRequest) => {
  return (
    await axiosInstance.postForm<CreateCelebrityResponse>(
      '/celebrities/',
      payload
    )
  ).data;
};
