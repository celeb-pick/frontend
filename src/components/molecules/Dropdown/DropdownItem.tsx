import { ComponentPropsWithoutRef, ReactNode } from 'react';
import tw from 'twin.macro';
import type { DropdownValueType } from './types';
import useDropdownContext from './useDropdownContext';

interface DropdownItemProps
  extends Omit<ComponentPropsWithoutRef<'li'>, 'value'> {
  value: DropdownValueType;
  children?: ReactNode;
}

function DropdownItem({ value, children, ...props }: DropdownItemProps) {
  const { setValue, setOpen } = useDropdownContext();

  const handleClick = () => {
    setValue(value);
    setOpen(false);
  };

  return (
    <li
      role="menuitem"
      {...props}
      onClick={handleClick}
      onKeyDown={() => {}}
      css={[
        tw`flex-y-center h-9 px-4 font-medium whitespace-nowrap cursor-pointer select-none hover:bg-gray-200`,
      ]}
    >
      {children || value}
    </li>
  );
}

export default DropdownItem;
