import { PaginationQueryParams } from './api';
import { OutfitPostListResponse } from './outfit';

export interface MyScrapOutfitPostListRequest {
  queryParams: PaginationQueryParams;
}

export type MyScrapOutfitPostListResponse = OutfitPostListResponse;
