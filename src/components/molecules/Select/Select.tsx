import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import Dropdown from '../Dropdown';
import { DropdownValueType } from '../Dropdown/types';
import SelectTriggerButton from './SelectTriggerButton';
import { SelectOptionsType } from './types';

interface SelectProps
  extends Omit<ComponentPropsWithoutRef<typeof Dropdown>, 'children'> {
  /**
   * 선택된 `Select Option`의 값이 할당되게 됩니다.
   */
  value: DropdownValueType;

  /**
   * 선택된 값이 없을 때 보여지는 placeholder 입니다.
   */
  placeholder?: string;

  /**
   * `Select Option`이 클릭 되면 해당 `value`에 값이 할당 됩니다.
   */
  onChangeValue: (value: DropdownValueType) => void;

  /**
   * `value`와 선택값인 `label`로 이루어진 배열 입니다.
   * `label`이 없으면 `value`값이 UI에 나타나게 됩니다.
   */
  options: SelectOptionsType;
}

/**
 * `Dropdown` 컴포넌트를 통해 구현한 Select 컴포넌트 입니다.
 * 도메인별 다양한 Select 컴포넌트를 구현하는데 사용될 수 있습니다.
 */
function Select({
  value,
  placeholder = '선택하기',
  onChangeValue,
  options,
  ...props
}: SelectProps) {
  return (
    <Dropdown value={value} onChangeValue={onChangeValue} {...props}>
      <Dropdown.Trigger
        as={<SelectTriggerButton value={value ?? placeholder} />}
      />
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            value={option.value}
            css={[value === option.value && tw`bg-blue-100 hover:bg-blue-100`]}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Select;
