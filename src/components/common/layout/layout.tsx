import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';
import AppBar from './app-bar';
import BottomTabBar from './bottom-tab-bar';

function Layout() {
  return (
    <div className="layout-container">
      <AppBar />
      <div css={[tw`pb-[--bottom-tab-bar-height]`]}>
        <Outlet />
      </div>
      <BottomTabBar />
    </div>
  );
}

export default Layout;
