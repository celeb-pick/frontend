import { PaginationQueryParams } from './api';
import { OutfitPostListResponse } from './outfit';

export type UserGender = '남성' | '여성';

export interface MyProfileResponse {
  email: string;
  nickname: string;
  gender: UserGender;
  profileImage?: string;
}

export interface MyOutfitPostListRequest {
  queryParams: PaginationQueryParams;
}

export type MyOutfitPostListResponse = OutfitPostListResponse;
