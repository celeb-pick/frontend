import { useCallback } from 'react';
import BaseOutfitScrapButton from './base-outfit-scrap-button';
import { useOutfitScrapButtonContext } from './useOutfitScrapButtonContext';

function OutfitPostScrapButton() {
  const { isScrapped, outfitPostId } = useOutfitScrapButtonContext();

  const handleClick = useCallback(() => {
    
  }, [isScrapped, outfitPostId]);

  return <BaseOutfitScrapButton onClick={handleClick} />;
}

export default OutfitPostScrapButton;
