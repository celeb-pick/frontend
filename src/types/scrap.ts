import { PaginationQueryParams, PaginationResponse } from './api';
import { OutfitItemCategory, OutfitPostListResponse } from './outfit';

export interface MyScrapOutfitPostListRequest {
  queryParams: PaginationQueryParams;
}

export type MyScrapOutfitPostListResponse = OutfitPostListResponse;

export interface MyScrapOutfitItemListRequest {
  queryParams: PaginationQueryParams;
}

export type MyScrapOutfitItemListResponse = PaginationResponse<{
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
