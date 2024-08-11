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
