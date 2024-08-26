import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStatus from '../features/auths/hooks/useAuthStatus';

interface ProtectedRouteProps {
  permission: 'user' | 'anonymous';
  children: ReactNode;
}

function ProtectedRoute({ permission, children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStatus();

  useEffect(() => {
    if (permission === 'user' && !isAuthenticated) {
      navigate('/login');
      return;
    }
    if (permission === 'anonymous' && isAuthenticated) {
      navigate('/');
    }
  }, [navigate, permission, isAuthenticated]);

  return children;
}

export default ProtectedRoute;
