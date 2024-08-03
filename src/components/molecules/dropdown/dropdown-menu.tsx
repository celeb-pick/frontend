import { ComponentPropsWithoutRef, ReactNode } from 'react';
import tw from 'twin.macro';
import FadeTransition from '../../common/fade-transition/fade-transition';
import useDropdownContext from './hooks';

interface DropdownMenuProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

function DropdownMenu({ children, ...props }: DropdownMenuProps) {
  const { open } = useDropdownContext();

  return (
    <FadeTransition in={open}>
      <ul
        css={[
          tw`absolute bottom-0 w-full py-2 overflow-x-hidden overflow-y-auto translate-y-full rounded shadow-md shadow-gray-400`,
        ]}
        {...props}
      >
        {children}
      </ul>
    </FadeTransition>
  );
}

export default DropdownMenu;
