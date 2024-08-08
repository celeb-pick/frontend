import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';
import AppBar from './app-bar';
import BottomTabBar from './bottom-tab-bar';

function Layout() {
  return (
    <div
      css={[
        tw`max-w-[--layout-max-width] min-w-[--layout-min-width] w-full min-h-[100vh] mx-auto border-solid border-x-2 border-gray-100`,
      ]}
    >
      <AppBar />
      <div css={[tw`pb-[--bottom-tab-bar-height]`]}>
        <Outlet />
      </div>
      <BottomTabBar />
    </div>
  );
}

export default Layout;
