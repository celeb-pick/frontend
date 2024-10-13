import tw from 'twin.macro';
import Skeleton from '../../../components/atoms/Skeleton';

function UserInfoSectionSkeleton() {
  return (
    <section css={[tw`flex-y-center gap-x-3.5 p-5 border-b border-b-gray-300`]}>
      <Skeleton variant="circular" width={56} height={56} />
      <div css={[tw`flex flex-col gap-y-2`]}>
        <Skeleton width={60} height={16} />
        <Skeleton width={20} height={14} />
      </div>
    </section>
  );
}

export default UserInfoSectionSkeleton;
