import { useCallback, useState } from 'react';
import useScrapOutfitPost from '../../../hooks/mutations/useScrapOutfitPost';
import useUnscrapOutfitPost from '../../../hooks/mutations/useUnscrapOutfitPost';
import BaseOutfitScrapButton from './base-outfit-scrap-button';
import { useOutfitScrapButtonContext } from './useOutfitScrapButtonContext';

function OutfitPostScrapButton() {
  const { isScrapped, scrapCount, outfitPostId } =
    useOutfitScrapButtonContext();
  const { mutate: mutateScrap, isPending: isPendingScrap } =
    useScrapOutfitPost();
  const { mutate: mutateUnscrap, isPending: isPendingUnscrap } =
    useUnscrapOutfitPost();
  const [updatedIsScrapped, setUpdatedIsScrapped] = useState<boolean>();
  const [updatedScrapCount, setUpdatedScrapCount] = useState<number>();

  const scrapOutfitPost = useCallback(() => {
    mutateScrap(outfitPostId!);
    setUpdatedIsScrapped(true);
    setUpdatedScrapCount(scrapCount + 1);
  }, [mutateScrap, scrapCount, outfitPostId]);

  const unscrapOutfitPost = useCallback(() => {
    mutateUnscrap(outfitPostId!);
    setUpdatedIsScrapped(false);
    setUpdatedScrapCount(scrapCount - 1);
  }, [mutateUnscrap, scrapCount, outfitPostId]);

  return (
    <BaseOutfitScrapButton
      onClick={isScrapped ? unscrapOutfitPost : scrapOutfitPost}
      updatedIsScrapped={updatedIsScrapped}
      updatedScrapCount={updatedScrapCount}
      disabled={isPendingScrap || isPendingUnscrap}
    />
  );
}

export default OutfitPostScrapButton;
