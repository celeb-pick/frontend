import { useContext } from 'react';
import { OutfitScrapButtonContext } from './context';

export const useOutfitScrapButtonContext = () => {
  const context = useContext(OutfitScrapButtonContext);

  if (!context) {
    throw Error(
      'OutfitScrapButtonContext는 OutfitScrapButton 컴포넌트 내부에서만 사용할 수 있습니다.'
    );
  }

  return context;
};
