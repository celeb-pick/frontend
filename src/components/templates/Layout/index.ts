import LayoutBottomTabBar from './LayoutBottomTabBar';
import LayoutMain from './Layout';
import LayoutLogoAppBar from './LayoutLogoAppBar';
import LayoutTitleWithBackAppBar from './LayoutTitleWithBackAppBar';

const Layout = Object.assign(LayoutMain, {
  LogoAppBar: LayoutLogoAppBar,
  TitleWithBackAppBar: LayoutTitleWithBackAppBar,
  BottomTabBar: LayoutBottomTabBar,
});

export default Layout;
