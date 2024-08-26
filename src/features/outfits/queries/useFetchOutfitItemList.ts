import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchOutfitItems } from '../../../api/outfit';
import { OutfitItemListRequest } from '../../../types/outfit';

const useFetchOutfitItemList = (req?: OutfitItemListRequest) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['fetchOutfitItemList', req],
    queryFn: ({ pageParam }) => fetchOutfitItems(req, pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ next }) => next,
  });
};

export default useFetchOutfitItemList;
