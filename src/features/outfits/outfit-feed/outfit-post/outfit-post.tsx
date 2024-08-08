import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import { OutfitPostListResponse } from '../../../../types/outfit';
import OutfitPostHeader from './outfit-post-header';
import OutfitPostSlider from './outfit-post-slider';

interface OutfitPostProps extends ComponentPropsWithoutRef<'div'> {
  outfitPost: OutfitPostListResponse['results'][number];
}

function OutfitPost({ outfitPost, ...props }: OutfitPostProps) {
  return (
    <div css={[tw`flex flex-col`]} {...props}>
      <OutfitPostHeader creator={outfitPost.creator} />
      <OutfitPostSlider outfitPost={outfitPost} />
    </div>
  );
}

export default OutfitPost;
