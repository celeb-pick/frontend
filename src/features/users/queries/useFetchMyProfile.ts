import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMyProfile } from '../../../api/user';

const useFetchMyProfile = () => {
  return useSuspenseQuery({
    queryKey: ['fetchMyProfile'],
    queryFn: fetchMyProfile,
  });
};

export default useFetchMyProfile;
