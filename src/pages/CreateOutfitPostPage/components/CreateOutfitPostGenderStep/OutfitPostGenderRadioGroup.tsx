import { ChangeEventHandler } from 'react';
import tw from 'twin.macro';
import RadioGroup from '../../../../components/atoms/RadioGroup';
import { RadioGroupOptionsType } from '../../../../components/atoms/RadioGroup/types';
import { OutfitPostGender } from '../../../../types/outfit';

interface OutfitPostGenderRadioGroupProps {
  value: OutfitPostGender;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const options: RadioGroupOptionsType<OutfitPostGender> = [
  { value: '남성' },
  { value: '여성' },
  { value: '공용' },
];

function OutfitPostGenderRadioGroup({
  value,
  onChange,
}: OutfitPostGenderRadioGroupProps) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      label="성별"
      options={options}
      css={[tw`w-80`]}
    />
  );
}

export default OutfitPostGenderRadioGroup;
