import { isAxiosError } from 'axios';

const useServerErrorResponse = <ErrorResponseType>(error: Error | null) => {
  if (!isAxiosError<ErrorResponseType>(error) || !error.response) {
    return undefined;
  }

  return error.response;
};

export default useServerErrorResponse;
