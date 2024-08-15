import { http, HttpResponse } from 'msw';
import { AuthStatusResponse } from '../../types/auth';

export const mockFetchAuthStatus = http.get('/api/auth/status', () => {
  return HttpResponse.json({ isAuthenticated: true } as AuthStatusResponse, {
    status: 200,
  });
});
