import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../../api/auth';
import { LoginRequest } from '../../types/auth';

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: LoginRequest) => login(req),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchAuthStatus'] });
    },
  });
};

export default useLogin;
