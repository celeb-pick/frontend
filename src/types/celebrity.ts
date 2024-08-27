import {
  ApiErrorMessagesResponse,
  PaginationQueryParams,
  PaginationResponse,
} from './api';

export type CelebrityCategory =
  | '아이돌'
  | '모델'
  | '가수'
  | '배우'
  | '인플루언서'
  | '기타';

export interface CelebrityListRequest {
  queryParams: {
    category?: CelebrityCategory | null;
    search?: string | null;
  } & PaginationQueryParams;
}

export type CelebrityListResponse = PaginationResponse<{
  id: number;
  name: string;
  profileImage: string;
  category: CelebrityCategory;
}>;

export interface CreateCelebrityRequest {
  payload: {
    name: string;
    profileImage: File;
    category: CelebrityCategory;
  };
}

export type CreateCelebrityErrorResponse = ApiErrorMessagesResponse<
  CreateCelebrityRequest['payload']
>;

export interface CreateCelebrityResponse {
  id: number;
  name: string;
  profileImage: string;
  category: CelebrityCategory;
}
