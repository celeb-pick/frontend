import { isAxiosError } from 'axios';

export const getServerErrorResponse = <ErrorResponseType>(
  error: Error | null
) => {
  if (!isAxiosError<ErrorResponseType>(error) || !error.response) {
    return undefined;
  }

  return error.response;
};
