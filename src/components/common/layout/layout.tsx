import { ComponentPropsWithoutRef, ReactNode } from 'react';
import tw from 'twin.macro';

interface LayoutProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

/**
 * 페이지에 맞는 `AppBar` 컴포넌트와 `BottomTabBar`를 포함할 수 있는 합성 컴포넌트 입니다.
 *
 * @example
 *
 * ```tsx
 * <Layout>
 *   <Layout.LogoAppBar />
 *   <div>페이지 내부 컨텐츠</div>
 *   <Layout.BottomTabBar />
 * </Layout>
 * ```
 */
function Layout({ children, ...props }: LayoutProps) {
  return (
    <div
      css={[
        tw`flex flex-col min-h-[100vh] w-full min-w-[--layout-min-width] max-w-[--layout-max-width] mx-auto border-x-2 border-solid border-gray-100`,
      ]}
      {...props}
    >
      {children}
    </div>
  );
}

export default Layout;
