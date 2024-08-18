import { ComponentPropsWithoutRef, ReactNode, useId } from 'react';
import tw from 'twin.macro';
import { RadioGroupValueType } from './types';

type InputProps = ComponentPropsWithoutRef<'input'>;

interface RadioGroupItemProps {
  name: string;
  stateValue: RadioGroupValueType;
  value: RadioGroupValueType;
  onChange: InputProps['onChange'];
  label?: ReactNode;
}

function RadioGroupItem({
  name,
  stateValue,
  value,
  onChange,
  label,
}: RadioGroupItemProps) {
  const itemId = useId();

  return (
    <label
      htmlFor={itemId}
      css={[tw`flex-y-center gap-x-1 hover:cursor-pointer`]}
    >
      <span>{label || value}</span>
      <input
        type="radio"
        id={itemId}
        name={name}
        value={value}
        onChange={onChange}
        checked={stateValue === value}
        css={[tw`relative bottom-[0.1px] hover:cursor-pointer`]}
      />
    </label>
  );
}

export default RadioGroupItem;
