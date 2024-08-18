import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../api/auth';
import { SignupRequest } from '../../../types/auth';
import { getServerErrorResponse } from '../../../utils/error';

const useSignup = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (req: SignupRequest) => signup(req),
    throwOnError: (error) => {
      if (getServerErrorResponse(error)?.status === HttpStatusCode.BadRequest) {
        return false;
      }
      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchAuthStatus'] });
      // TODO 내 프로필 페이지로 이동하게 변경
      navigate('/');
    },
  });
};

export default useSignup;
