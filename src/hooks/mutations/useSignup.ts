import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';
import { SignupRequest } from '../../types/auth';

const useSignup = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (req: SignupRequest) => signup(req),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchAuthStatus'] });
      // TODO 내 프로필 페이지로 이동하게 변경
      navigate('/');
    },
  });
};

export default useSignup;
