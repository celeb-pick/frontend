import { AxiosError, HttpStatusCode, isAxiosError } from 'axios';

export const getServerErrorResponse = <ErrorResponseType>(
  error: Error | null
) => {
  if (!isAxiosError<ErrorResponseType>(error) || !error.response) {
    return undefined;
  }

  return error.response;
};

export const generateServerErrorMessage = (error: AxiosError) => {
  // Axios 측에서 서버 요청 타임아웃 제한에 걸린 경우
  if (error.code === 'ECONNABORTED') {
    return '연결에 잠시 문제가 발생 했습니다.';
  }

  const { status } = error.response!;
  switch (status) {
    case HttpStatusCode.InternalServerError:
    case HttpStatusCode.BadGateway:
    case HttpStatusCode.GatewayTimeout:
      return '서버 내부에 문제가 발생 했습니다.';
    case HttpStatusCode.RequestTimeout:
      return '연결에 잠시 문제가 발생 했습니다.';
    case HttpStatusCode.NotFound:
      return '데이터를 찾을 수 없습니다.';
    case HttpStatusCode.TooManyRequests:
      return '서버에 너무 많은 요청을 보낼 수 없습니다.';
    default:
      return '잠시 연결이 늦어지고 있습니다.';
  }
};
