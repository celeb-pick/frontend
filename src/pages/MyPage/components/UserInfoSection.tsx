import tw from 'twin.macro';
import Avatar from '../../../components/atoms/Avatar';
import useFetchMyProfile from '../../../features/users/queries/useFetchMyProfile';

function UserInfoSection() {
  const { data } = useFetchMyProfile();

  return (
    <section css={[tw`flex-y-center gap-x-3.5 p-5 border-b border-b-gray-300`]}>
      <Avatar src={data.profileImage} size={56} />
      <div css={[tw`flex flex-col gap-y-0.5`]}>
        <span css={[tw`font-medium`]}>{data.nickname}</span>
        <span css={[tw`text-sm text-gray-500`]}>{data.gender}</span>
      </div>
    </section>
  );
}

export default UserInfoSection;
