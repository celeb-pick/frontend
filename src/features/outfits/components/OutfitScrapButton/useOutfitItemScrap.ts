import { useCallback, useState } from 'react';
import useScrapOutfitItem from '../../../scraps/mutations/useScrapOutfitItem';
import useUnscrapOutfitItem from '../../../scraps/mutations/useUnscrapOutfitItem';
import { UseOutfitScrapReturnType } from './types';

interface UseOutfitItemScrapParams {
  outfitItemId?: number;
  isScrapped: boolean | null;
  scrapCount?: number;
}

const useOutfitItemScrap = ({
  isScrapped,
  scrapCount,
  outfitItemId,
}: UseOutfitItemScrapParams): UseOutfitScrapReturnType => {
  const { mutate: mutateScrap, isPending: isPendingScrap } =
    useScrapOutfitItem();
  const { mutate: mutateUnscrap, isPending: isPendingUnscrap } =
    useUnscrapOutfitItem();

  const [updatedIsScrapped, setUpdatedIsScrapped] = useState<boolean>();
  const [updatedScrapCount, setUpdatedScrapCount] = useState<number>();

  const scrapOutfitItem = useCallback(() => {
    mutateScrap(outfitItemId!);
    setUpdatedIsScrapped(true);
    if (typeof scrapCount === 'number') {
      setUpdatedScrapCount(scrapCount + 1);
    }
  }, [mutateScrap, scrapCount, outfitItemId]);

  const unscrapOutfitItem = useCallback(() => {
    mutateUnscrap(outfitItemId!);
    setUpdatedIsScrapped(false);
    if (typeof scrapCount === 'number') {
      setUpdatedScrapCount(scrapCount - 1);
    }
  }, [mutateUnscrap, scrapCount, outfitItemId]);

  const toggleScrap = isScrapped ? unscrapOutfitItem : scrapOutfitItem;
  const isPending = isPendingScrap || isPendingUnscrap;

  return { updatedIsScrapped, updatedScrapCount, toggleScrap, isPending };
};

export default useOutfitItemScrap;
