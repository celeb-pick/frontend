import { ApiErrorMessagesResponse } from './api';
import { UserGender } from './user';

export interface AuthStatusResponse {
  isAuthenticated: boolean;
}

export interface LoginRequest {
  payload: {
    email: string;
    password: string;
  };
}

export interface LoginErrorResponse {
  message: string;
}

export interface SignupRequest {
  payload: {
    email: string;
    nickname: string;
    gender: UserGender;
    password: string;
  };
}

export type SignupErrorResponse = ApiErrorMessagesResponse<
  SignupRequest['payload']
>;
