import BottomTabBar from './bottom-tab-bar';
import LayoutMain from './layout';
import LogoAppBar from './logo-app-bar';
import TitleWithBackAppBar from './title-with-back-app-bar';

const Layout = Object.assign(LayoutMain, {
  LogoAppBar,
  TitleWithBackAppBar,
  BottomTabBar,
});

export default Layout;
