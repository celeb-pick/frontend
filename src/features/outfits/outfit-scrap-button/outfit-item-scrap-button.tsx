import { useCallback, useState } from 'react';
import useScrapOutfitItem from '../../../hooks/mutations/useScrapOutfitItem';
import useUnscrapOutfitItem from '../../../hooks/mutations/useUnscrapOutfitItem';
import BaseOutfitScrapButton from './base-outfit-scrap-button';
import { useOutfitScrapButtonContext } from './useOutfitScrapButtonContext';

function OutfitItemScrapButton() {
  const { isScrapped, scrapCount, outfitItemId } =
    useOutfitScrapButtonContext();
  const { mutate: mutateScrap, isPending: isPendingScrap } =
    useScrapOutfitItem();
  const { mutate: mutateUnscrap, isPending: isPendingUnscrap } =
    useUnscrapOutfitItem();
  const [updatedIsScrapped, setUpdatedIsScrapped] = useState<boolean>();
  const [updatedScrapCount, setUpdatedScrapCount] = useState<number>();

  const scrapOutfitItem = useCallback(() => {
    mutateScrap(outfitItemId!);
    setUpdatedIsScrapped(true);
    setUpdatedScrapCount(scrapCount + 1);
  }, [mutateScrap, scrapCount, outfitItemId]);

  const unscrapOutfitItem = useCallback(() => {
    mutateUnscrap(outfitItemId!);
    setUpdatedIsScrapped(false);
    setUpdatedScrapCount(scrapCount - 1);
  }, [mutateUnscrap, scrapCount, outfitItemId]);

  return (
    <BaseOutfitScrapButton
      onClick={isScrapped ? unscrapOutfitItem : scrapOutfitItem}
      updatedIsScrapped={updatedIsScrapped}
      updatedScrapCount={updatedScrapCount}
      disabled={isPendingScrap || isPendingUnscrap}
    />
  );
}

export default OutfitItemScrapButton;
