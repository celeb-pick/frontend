import { useMutation, useQueryClient } from '@tanstack/react-query';
import { scrapOutfitPost } from '../../api/scrap';

const useScrapOutfitPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outfitPostId: number) => scrapOutfitPost(outfitPostId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchOutfitPostList'] });
    },
  });
};

export default useScrapOutfitPost;
