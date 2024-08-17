import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { scrapOutfitPost } from '../../api/scrap';
import { getServerErrorResponse } from '../../utils/error';

const useScrapOutfitPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outfitPostId: number) => scrapOutfitPost(outfitPostId),
    throwOnError: (error) => {
      if (getServerErrorResponse(error)?.status === HttpStatusCode.Conflict) {
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

export default useScrapOutfitPost;
