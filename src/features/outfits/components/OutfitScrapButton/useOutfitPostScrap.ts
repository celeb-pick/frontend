import { useCallback, useState } from 'react';
import useScrapOutfitPost from '../../../scraps/mutations/useScrapOutfitPost';
import useUnscrapOutfitPost from '../../../scraps/mutations/useUnscrapOutfitPost';
import { UseOutfitScrapReturnType } from './types';

interface UseOutfitPostScrapParams {
  outfitPostId?: number;
  isScrapped: boolean | null;
  scrapCount?: number;
}

const useOutfitPostScrap = ({
  isScrapped,
  scrapCount,
  outfitPostId,
}: UseOutfitPostScrapParams): UseOutfitScrapReturnType => {
  const { mutate: mutateScrap, isPending: isPendingScrap } =
    useScrapOutfitPost();
  const { mutate: mutateUnscrap, isPending: isPendingUnscrap } =
    useUnscrapOutfitPost();

  const [updatedIsScrapped, setUpdatedIsScrapped] = useState<boolean>();
  const [updatedScrapCount, setUpdatedScrapCount] = useState<number>();

  const scrapOutfitPost = useCallback(() => {
    mutateScrap(outfitPostId!);
    setUpdatedIsScrapped(true);
    if (typeof scrapCount === 'number') {
      setUpdatedScrapCount(scrapCount + 1);
    }
  }, [mutateScrap, scrapCount, outfitPostId]);

  const unscrapOutfitPost = useCallback(() => {
    mutateUnscrap(outfitPostId!);
    setUpdatedIsScrapped(false);
    if (typeof scrapCount === 'number') {
      setUpdatedScrapCount(scrapCount - 1);
    }
  }, [mutateUnscrap, scrapCount, outfitPostId]);

  const toggleScrap = isScrapped ? unscrapOutfitPost : scrapOutfitPost;
  const isPending = isPendingScrap || isPendingUnscrap;

  return { updatedIsScrapped, updatedScrapCount, toggleScrap, isPending };
};

export default useOutfitPostScrap;
