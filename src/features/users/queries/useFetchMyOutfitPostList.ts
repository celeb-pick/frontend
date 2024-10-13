import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchMyOutfitPosts } from '../../../api/user';
import { MyOutfitPostListRequest } from '../../../types/user';

const useFetchMyOutfitPostList = (req?: MyOutfitPostListRequest) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['fetchMyOutfitPostList', req],
    queryFn: ({ pageParam }) => fetchMyOutfitPosts(req, pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ next }) => next,
  });
};

export default useFetchMyOutfitPostList;
