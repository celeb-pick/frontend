import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import Avatar from '../../../../../components/atoms/Avatar';
import { OutfitPostListResponse } from '../../../../../types/outfit';

interface OutfitPostHeaderProps extends ComponentPropsWithoutRef<'div'> {
  creator: OutfitPostListResponse['results'][number]['creator'];
}

function OutfitPostHeader({ creator, ...props }: OutfitPostHeaderProps) {
  return (
    <div css={[tw`flex-y-center p-3`]} {...props}>
      <div css={[tw`flex-y-center gap-x-2`]}>
        <Avatar size={28} src={creator.profileImage} />
        <span css={[tw`font-medium text-sm`]}>{creator.nickname}</span>
      </div>
    </div>
  );
}

export default OutfitPostHeader;
