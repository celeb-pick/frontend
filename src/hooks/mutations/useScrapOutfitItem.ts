import { useMutation, useQueryClient } from '@tanstack/react-query';
import { scrapOutfitItem } from '../../api/scrap';

const useScrapOutfitItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outfitItemId: number) => scrapOutfitItem(outfitItemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchOutfitPostList'] });
    },
  });
};

export default useScrapOutfitItem;
