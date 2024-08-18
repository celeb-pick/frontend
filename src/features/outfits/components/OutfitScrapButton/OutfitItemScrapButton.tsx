import { useCallback, useState } from 'react';
import useScrapOutfitItem from '../../../scraps/mutations/useScrapOutfitItem';
import useUnscrapOutfitItem from '../../../scraps/mutations/useUnscrapOutfitItem';
import BaseOutfitScrapButton from './BaseOutfitScrapButton';
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

  const handleClickButton = isScrapped ? unscrapOutfitItem : scrapOutfitItem;

  return (
    // propagation 되는지 테스트해보기
    <BaseOutfitScrapButton
      onClick={(event) => {
        event.stopPropagation();
        handleClickButton();
      }}
      updatedIsScrapped={updatedIsScrapped}
      updatedScrapCount={updatedScrapCount}
      disabled={isPendingScrap || isPendingUnscrap}
    />
  );
}

export default OutfitItemScrapButton;
