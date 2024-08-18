import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchMyScrapOutfitItems } from '../../../api/scrap';
import { MyScrapOutfitItemListRequest } from '../../../types/scrap';

const useFetchMyScrapOutfitItemList = (req?: MyScrapOutfitItemListRequest) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['fetchMyScrapOutfitItemList', req],
    queryFn: ({ pageParam }) => fetchMyScrapOutfitItems(req, pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ next }) => next,
  });
};

export default useFetchMyScrapOutfitItemList;
