import { ComponentPropsWithoutRef, useEffect } from 'react';
import tw from 'twin.macro';
import Skeleton from '../../../components/atoms/skeleton';

interface OutfitFeedSkeletonProps extends ComponentPropsWithoutRef<'div'> {}

function PostSkeleton() {
  return (
    <div>
      <div css={[tw`flex-y-center p-3`]}>
        <div css={[tw`flex-y-center gap-x-2`]}>
          <Skeleton width={28} height={28} variant="circular" />
          <Skeleton width={100} />
        </div>
      </div>
      <Skeleton css={[tw`h-auto aspect-square`]} />
    </div>
  );
}

function OutfitFeedSkeleton({ ...props }: OutfitFeedSkeletonProps) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div css={[tw`flex flex-col max-w-lg min-w-[300px] w-full`]} {...props}>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
}

export default OutfitFeedSkeleton;
