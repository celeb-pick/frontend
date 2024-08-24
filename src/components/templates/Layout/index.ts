import LayoutMain from './Layout';
import LayoutBottomTabBar from './LayoutBottomTabBar';
import LayoutLogoAppBar from './LayoutLogoAppBar';
import LayoutTitleWithBackAppBar from './LayoutTitleWithBackAppBar';
import LayoutTitleWithCloseAppBar from './LayoutTitleWithCloseAppBar';

const Layout = Object.assign(LayoutMain, {
  LogoAppBar: LayoutLogoAppBar,
  TitleWithBackAppBar: LayoutTitleWithBackAppBar,
  TitleWithCloseAppBar: LayoutTitleWithCloseAppBar,
  BottomTabBar: LayoutBottomTabBar,
});

export default Layout;
