import { ChangeEventHandler } from 'react';
import RadioGroup from '../../../components/atoms/RadioGroup';
import { RadioGroupOptionsType } from '../../../components/atoms/RadioGroup/types';
import { UserGender } from '../../../types/user';

interface UserGenderRadioGroupProps {
  value: UserGender;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const options: RadioGroupOptionsType<UserGender> = [
  { value: '남성' },
  { value: '여성' },
];

function UserGenderRadioGroup({
  value,
  onChange,
  className,
}: UserGenderRadioGroupProps) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      label="성별"
      options={options}
      className={className}
    />
  );
}

export default UserGenderRadioGroup;
