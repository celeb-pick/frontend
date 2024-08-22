import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchCelebrities } from '../../../api/celebrity';
import { CelebrityListRequest } from '../../../types/celebrity';

const useFetchCelebrityList = (req?: CelebrityListRequest) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['fetchCelebrityList', req],
    queryFn: ({ pageParam }) => fetchCelebrities(req, pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ next }) => next,
  });
};

export default useFetchCelebrityList;
