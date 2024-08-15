import { ComponentPropsWithoutRef, ReactNode } from 'react';
import tw from 'twin.macro';

interface LayoutProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

function Layout({ children, ...props }: LayoutProps) {
  return (
    <div
      css={[
        tw`mx-auto min-h-[100vh] w-full min-w-[--layout-min-width] max-w-[--layout-max-width] border-x-2 border-solid border-gray-100`,
      ]}
      {...props}
    >
      {children}
    </div>
  );
}

export default Layout;
