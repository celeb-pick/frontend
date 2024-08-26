import type {
  ApiErrorMessagesResponse,
  PaginationQueryParams,
  PaginationResponse,
} from './api';
import { CelebrityCategory } from './celebrity';

export type OutfitPostGender = '남성' | '여성' | '공용';

export interface OutfitPostListRequest {
  queryParams: {
    gender?: OutfitPostGender | null;
    celebrityCategory?: CelebrityCategory | null;
    search?: string | null;
    itemId?: number | null;
  } & PaginationQueryParams;
}

export type OutfitPostListResponse = PaginationResponse<{
  id: number;
  title: string;
  createdAt: string;
  gender: OutfitPostGender;
  image: string;
  scrapCount: number;
  isScrapped: boolean | null;
  celebrity: {
    id: number;
    name: string;
  };
  creator: {
    id: number;
    profileImageUrl?: string;
    nickname: string;
  };
  items: {
    id: number;
    name: string;
    purchaseLink?: string;
    imageUrl: string;
    scrapCount: number;
    isScrapped: boolean | null;
    brand: {
      id: number;
      name: string;
    };
  }[];
}>;

export interface CreateOutfitPostRequest {
  payload: {
    celebrityId: number;
    gender: OutfitPostGender;
    title: string;
    image: File;
    itemIds: number[];
  };
}

export type CreateOutfitPostErrorResponse = ApiErrorMessagesResponse<
  CreateOutfitPostRequest['payload']
>;

export type OutfitItemCategory =
  | '상의'
  | '하의'
  | '아우터'
  | '신발'
  | '가방'
  | '악세사리'
  | '기타';

export interface OutfitItemListRequest {
  queryParams: {
    itemCategory?: OutfitItemCategory;
    search?: string;
  } & PaginationQueryParams;
}

export type OutfitItemListResponse = PaginationResponse<{
  id: number;
  category: OutfitItemCategory;
  name: string;
  purchaseLink?: string;
  imageUrl: string;
  scrapCount: number;
  isScrapped: boolean | null;
  brand: {
    id: number;
    name: string;
  };
}>;
