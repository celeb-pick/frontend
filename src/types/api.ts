export interface ApiErrorResponse {
  message: string;
}

export type ApiErrorMessagesResponse<RequestPayloadType> = Partial<
  Record<keyof RequestPayloadType, Array<string>>
>;

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
