import { useContext } from 'react';
import { CreateOutfitPostPageContext } from './CreateOutfitPostPageProvider';

const useCreateOutfitPostPageContext = () => {
  const context = useContext(CreateOutfitPostPageContext);

  if (!context) {
    throw Error(
      'CreateOutfitPostPageContext는 CreateOutfitPostPage 페이지 내부에서만 사용할 수 있습니다.'
    );
  }

  return context;
};

export default useCreateOutfitPostPageContext;
