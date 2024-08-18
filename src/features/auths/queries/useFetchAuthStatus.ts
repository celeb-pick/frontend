import { useQuery } from '@tanstack/react-query';
import { fetchAuthStatus } from '../../../api/auth';

const useFetchAuthStatus = () => {
  return useQuery({
    queryKey: ['fetchAuthStatus'],
    queryFn: fetchAuthStatus,
  });
};

export default useFetchAuthStatus;
