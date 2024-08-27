import { useId } from 'react';
import tw from 'twin.macro';
import Avatar from '../../../../components/atoms/Avatar';
import { CelebrityListResponse } from '../../../../types/celebrity';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';

interface CelebrityListContentItemProps {
  celebrityRadioGroupId: string;
  celebrity: CelebrityListResponse['results'][number];
}

function CelebrityListContentItem({
  celebrityRadioGroupId,
  celebrity,
}: CelebrityListContentItemProps) {
  const CelebrityItemId = useId();

  const {
    celebrityId: { onChange, value },
  } = useCreateOutfitPostPageContext();

  const isSelected = Number(value) === celebrity.id;

  return (
    <label
      htmlFor={CelebrityItemId}
      css={[
        tw`relative flex-y-center flex-col gap-y-2 cursor-pointer rounded font-medium`,
        tw`hover:text-indigo-500 hover:font-semibold`,
        isSelected && tw`text-indigo-500 font-semibold`,
      ]}
    >
      <Avatar
        src={celebrity.profileImage}
        size={70}
        alt={`${celebrity.name} 프로필 이미지`}
        css={[isSelected && tw`border-solid border-2 border-indigo-500`]}
      />
      <span css={[tw`text-center line-clamp-2`]}>{celebrity.name}</span>
      <input
        type="radio"
        name={celebrityRadioGroupId}
        value={celebrity.id}
        onChange={(event) => onChange(Number(event.target.value))}
        checked={isSelected}
        id={CelebrityItemId}
        css={[tw`hidden`]}
      />
    </label>
  );
}

export default CelebrityListContentItem;
