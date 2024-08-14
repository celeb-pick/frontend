import { useMutation, useQueryClient } from '@tanstack/react-query';
import { unscrapOutfitItem } from '../../api/scrap';

const useUnscrapOutfitItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outfitItemId: number) => unscrapOutfitItem(outfitItemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchOutfitPostList'] });
    },
  });
};

export default useUnscrapOutfitItem;
