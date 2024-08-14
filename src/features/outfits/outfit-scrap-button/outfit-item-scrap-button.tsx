import { useCallback } from 'react';
import BaseOutfitScrapButton from './base-outfit-scrap-button';
import { useOutfitScrapButtonContext } from './useOutfitScrapButtonContext';

function OutfitItemScrapButton() {
  const { isScrapped, outfitItemId } = useOutfitScrapButtonContext();

  const handleClick = useCallback(() => {
    
  }, [isScrapped, outfitItemId]);

  return <BaseOutfitScrapButton onClick={handleClick} />;
}

export default OutfitItemScrapButton;
