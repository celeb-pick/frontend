import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { scrapOutfitItem } from '../../../api/scrap';
import { getServerErrorResponse } from '../../../utils/error';

const useScrapOutfitItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outfitItemId: number) => scrapOutfitItem(outfitItemId),
    throwOnError: (error) => {
      if (getServerErrorResponse(error)?.status === HttpStatusCode.Conflict) {
        return false;
      }
      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchOutfitPostList'] });
      queryClient.invalidateQueries({
        queryKey: ['fetchMyScrapOutfitItemList'],
      });
    },
  });
};

export default useScrapOutfitItem;
