import { ComponentPropsWithoutRef, useId } from 'react';
import tw from 'twin.macro';
import RadioGroupItem from './radio-group-item';
import { RadioGroupOptionsType, RadioGroupValueType } from './types';

type InputProps = ComponentPropsWithoutRef<'input'>;

interface RadioGroupProps {
  value: RadioGroupValueType;
  onChange: InputProps['onChange'];
  label: string;
  options: RadioGroupOptionsType;
  className?: string;
}

function RadioGroup({
  value,
  onChange,
  label,
  options,
  className,
}: RadioGroupProps) {
  const radioGroupId = useId();
  return (
    <div
      css={[
        tw`flex flex-col gap-y-2 w-full px-2.5 py-1 border border-solid border-gray-400 rounded`,
      ]}
      className={className}
    >
      <span id={radioGroupId} css={[tw`text-gray-500 text-sm`]}>
        {label}
      </span>
      <div
        role="radiogroup"
        aria-labelledby={radioGroupId}
        css={[tw`flex flex-wrap gap-x-4 gap-y-1.5`]}
      >
        {options.map((option) => (
          <RadioGroupItem
            key={option.value}
            name={radioGroupId}
            stateValue={value}
            value={option.value}
            label={option.label}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;
