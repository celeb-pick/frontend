import tw from 'twin.macro';
import Skeleton from '../../../../components/atoms/Skeleton';

function CelebrityListSkeleton() {
  return (
    <div css={[tw`grid grid-cols-4 gap-4 w-full max-w-[420px]`]}>
      {Array.from({ length: 16 }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} css={[tw`flex-center flex-col gap-y-2`]}>
          <Skeleton variant="circular" width={70} height={70} css={[tw``]} />
          <Skeleton variant="rectangular" />
        </div>
      ))}
    </div>
  );
}

export default CelebrityListSkeleton;
