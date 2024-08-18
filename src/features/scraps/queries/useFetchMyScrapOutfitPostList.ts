import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchMyScrapOutfitPosts } from '../../../api/scrap';
import { MyScrapOutfitPostListRequest } from '../../../types/scrap';

const useFetchMyScrapOutfitPostList = (req?: MyScrapOutfitPostListRequest) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['fetchMyScrapOutfitPostList', req],
    queryFn: ({ pageParam }) => fetchMyScrapOutfitPosts(req, pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ next }) => next,
  });
};

export default useFetchMyScrapOutfitPostList;
