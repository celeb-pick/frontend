import { ReactNode } from 'react';
import tw from 'twin.macro';

interface CreateOutfitPostTitleProps {
  children: ReactNode;
}

function CreateOutfitPostTitle({ children }: CreateOutfitPostTitleProps) {
  return <h1 css={[tw`text-center text-2xl font-medium py-14`]}>{children}</h1>;
}

export default CreateOutfitPostTitle;
