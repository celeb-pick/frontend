import { ComponentPropsWithoutRef, ReactNode } from 'react';
import tw from 'twin.macro';
import useDropdownContext from './useDropdownContext';

interface DropdownMenuProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

function DropdownMenu({ children, ...props }: DropdownMenuProps) {
  const { open } = useDropdownContext();

  if (!open) {
    return null;
  }

  return (
    <ul
      css={[
        tw`z-10 absolute bottom-0 w-full py-2 overflow-x-hidden overflow-y-auto translate-y-full rounded shadow-md shadow-gray-400 bg-white`,
      ]}
      {...props}
    >
      {children}
    </ul>
  );
}

export default DropdownMenu;
