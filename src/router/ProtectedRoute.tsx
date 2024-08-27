import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchAuthStatus from '../features/auths/queries/useFetchAuthStatus';

interface ProtectedRouteProps {
  permission: 'user' | 'anonymous';
  children: ReactNode;
}

function ProtectedRoute({ permission, children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { data, isSuccess } = useFetchAuthStatus();
  useEffect(() => {
    if (!isSuccess) {
      return;
    }
    if (permission === 'user' && !data.isAuthenticated) {
      navigate('/login');
      return;
    }
    if (permission === 'anonymous' && data.isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isSuccess, permission, data]);

  return children;
}

export default ProtectedRoute;
