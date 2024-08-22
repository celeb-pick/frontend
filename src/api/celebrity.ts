import { axiosInstance } from '../config/axios';
import type {
  CelebrityListRequest,
  CelebrityListResponse,
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
