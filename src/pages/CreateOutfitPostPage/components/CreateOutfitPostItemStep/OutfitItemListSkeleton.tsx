import tw from 'twin.macro';
import Skeleton from '../../../../components/atoms/Skeleton';

function OutfitItemListSkeleton() {
  return (
    <ul css={[tw`w-full`]}>
      {Array.from({ length: 8 }).map((_, i) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          css={[
            tw`flex-y-center flex-wrap gap-x-2.5 p-3 border-solid border-b `,
          ]}
        >
          <Skeleton width={13} height={13} />
          <Skeleton width={112} height={112} />
          <Skeleton width={58} height={30} variant="circular" />
          <Skeleton height={24} css={[tw`flex-1`]} />
        </li>
      ))}
    </ul>
  );
}

export default OutfitItemListSkeleton;
