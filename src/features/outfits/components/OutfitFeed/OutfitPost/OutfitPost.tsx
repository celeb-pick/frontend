import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import { OutfitPostListResponse } from '../../../../../types/outfit';
import OutfitPostHeader from './OutfitPostHeader';
import OutfitPostSlider from './OutfitPostSlider';

interface OutfitPostProps extends ComponentPropsWithoutRef<'div'> {
  outfitPost: OutfitPostListResponse['results'][number];
}

function OutfitPost({ outfitPost, ...props }: OutfitPostProps) {
  const outfitPostRef = useRef<HTMLDivElement>(null);
  const { outfitPostId: outfitPostIdParam } = useParams();

  useEffect(() => {
    if (!outfitPostIdParam || !outfitPostRef.current) {
      return;
    }
    if (Number(outfitPostIdParam) === outfitPost.id) {
      outfitPostRef.current.scrollIntoView();
    }
  }, [outfitPostIdParam, outfitPostRef, outfitPost]);

  return (
    <div ref={outfitPostRef} css={[tw`flex flex-col`]} {...props}>
      <OutfitPostHeader creator={outfitPost.creator} />
      <OutfitPostSlider outfitPost={outfitPost} />
    </div>
  );
}

export default OutfitPost;
