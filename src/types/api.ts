export interface ApiErrorResponse {
  message: string;
}

export interface PaginationQueryParams {
  page?: number | null;
  pageSize?: number | null;
}

export interface PaginationResponse<T> {
  page: number;
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
}
