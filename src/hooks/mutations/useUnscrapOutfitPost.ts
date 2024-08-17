import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { unscrapOutfitPost } from '../../api/scrap';
import { getServerErrorResponse } from '../../utils/error';

const useUnscrapOutfitPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outfitPostId: number) => unscrapOutfitPost(outfitPostId),
    throwOnError: (error) => {
      if (getServerErrorResponse(error)?.status === HttpStatusCode.BadRequest) {
        return false;
      }
      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchOutfitPostList'] });
      queryClient.invalidateQueries({
        queryKey: ['fetchMyScrapOutfitPostList'],
      });
    },
  });
};

export default useUnscrapOutfitPost;
