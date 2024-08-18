import { ComponentPropsWithoutRef, useId } from 'react';
import tw from 'twin.macro';
import RadioGroupItem from './RadioGroupItem';
import { RadioGroupOptionsType, RadioGroupValueType } from './types';

type InputProps = ComponentPropsWithoutRef<'input'>;

interface RadioGroupProps {
  /**
   * 컴포넌트의 value값 입니다.
   */
  value: RadioGroupValueType;

  /**
   * 컴포넌트의 value값이 변할 때 실행 되는 콜백 함수 입니다.
   */
  onChange: InputProps['onChange'];

  /**
   * 라벨 텍스트 입니다.
   */
  label: string;

  /**
   * `value`와 선택값인 `label`로 이루어진 배열 입니다.
   * `label`이 없으면 `value`값이 UI에 나타나게 됩니다.
   */
  options: RadioGroupOptionsType;

  /**
   * 컴포넌트의 Wrapper 스타일을 지정할 수 있습니다.
   */
  className?: string;
}

/**
 * `input[type='radio']`와 `label`로 이루어진 라디오 그룹 컴포넌트 입니다.
 */
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
