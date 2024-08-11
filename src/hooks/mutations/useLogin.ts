import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { LoginRequest } from '../../types/auth';

const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (req: LoginRequest) => login(req),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchAuthStatus'] });
      // TODO: 내 프로필 페이지로 이동하게 변경
      navigate('/');
    },
  });
};

export default useLogin;
