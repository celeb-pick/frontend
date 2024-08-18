import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchOutfitPosts } from '../../../api/outfit';
import { OutfitPostListRequest } from '../../../types/outfit';

const useFetchOutfitPostList = (req?: OutfitPostListRequest) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['fetchOutfitPostList', req],
    queryFn: ({ pageParam }) => fetchOutfitPosts(req, pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ next }) => next,
  });
};

export default useFetchOutfitPostList;
