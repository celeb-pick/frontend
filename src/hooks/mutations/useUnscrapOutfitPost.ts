import { useMutation, useQueryClient } from '@tanstack/react-query';
import { unscrapOutfitPost } from '../../api/scrap';

const useUnscrapOutfitPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outfitPostId: number) => unscrapOutfitPost(outfitPostId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchOutfitPostList'] });
    },
  });
};

export default useUnscrapOutfitPost;
