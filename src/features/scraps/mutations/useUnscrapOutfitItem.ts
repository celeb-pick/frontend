import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { unscrapOutfitItem } from '../../../api/scrap';
import { getServerErrorResponse } from '../../../utils/error';

const useUnscrapOutfitItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outfitItemId: number) => unscrapOutfitItem(outfitItemId),
    throwOnError: (error) => {
      if (getServerErrorResponse(error)?.status === HttpStatusCode.BadRequest) {
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

export default useUnscrapOutfitItem;
