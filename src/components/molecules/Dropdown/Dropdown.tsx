import {
  ComponentPropsWithoutRef,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';
import useClickOutside from '../../../hooks/useClickOutside';
import { DropdownProvider } from './DropdownProvider';
import type { DropdownValueType } from './types';

export interface DropdownProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * 선택된 `Item` 값이 할당되게 됩니다.
   */
  value: DropdownValueType;

  /**
   * `Item`이 클릭 되면 해당 `setState` 함수가 호출 됩니다.
   */
  onChangeValue: (value: DropdownValueType) => void;

  /**
   * 합성 컴포넌트, 일반 HTMLElement 등이 올 수 있습니다.
   */
  children: ReactNode;
}

/**
 * 여러 컴포넌트로 구성되는 드랍다운 합성 컴포넌트 입니다.
 * 트리거의 클릭 이벤트를 통해 `Dropdown.Menu` 컴포넌트가 보여지게 됩니다.
 *
 * @example
 *
 * ```tsx
 * const [value, setValue] = useState<DropdownValueType>(null);
 *
 * <Dropdown value={value} onChangeValue={setValue}>
 *   <Dropdown.Trigger as={<button>{value ?? '선택'}</button>} />
 *   <Dropdown.Menu>
 *     <Dropdown.Item value="상의" />
 *     <Dropdown.Item value="하의" />
 *   </Dropdown.Menu>
 * </Dropdown>
 * ```
 */
function Dropdown({ value, onChangeValue, children, ...props }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleClickOutside = useCallback(() => {
    setOpen(false);
  }, []);

  useClickOutside(dropdownRef, handleClickOutside);

  return (
    <DropdownProvider
      value={value}
      setValue={onChangeValue}
      open={open}
      setOpen={setOpen}
    >
      <div
        ref={dropdownRef}
        css={[tw`relative flex flex-col w-fit min-w-[120px] text-sm`]}
        {...props}
      >
        {children}
      </div>
    </DropdownProvider>
  );
}

export default Dropdown;
