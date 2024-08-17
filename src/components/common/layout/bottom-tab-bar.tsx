import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tw from 'twin.macro';
import useAuthStatus from '../../../hooks/useAuthStatus';

interface TabNavigatorProps {
  icon: ReactElement;
  label: string;
  to: string;
}

function TabNavigator({ icon, label, to }: TabNavigatorProps) {
  const location = useLocation();

  return (
    <Link
      css={[
        tw`flex flex-col gap-y-1 justify-center items-center h-full px-4 py-2 text-gray-800`,
        to === location.pathname && tw`text-indigo-600`,
      ]}
      to={to}
    >
      {icon}
      <span css={[tw`font-bold text-sm`]}>{label}</span>
    </Link>
  );
}

const layoutStyle = tw`
  z-20 fixed bottom-0 max-w-[calc(var(--layout-max-width) - 4px)] min-w-[--layout-min-width]
  w-full h-[--bottom-tab-bar-height] pb-[env(safe-area-inset-bottom)] bg-white border-t border-solid border-gray-100
`;

function BottomTabBar() {
  const { isAuthenticated } = useAuthStatus();

  return (
    <>
      {/* absolute로 차지한 BottomTabBar의 빈 공간을 채우는 div */}
      <div css={[tw`h-[--bottom-tab-bar-height]`]} />

      <div css={[layoutStyle, tw`flex-y-center justify-around`]}>
        <TabNavigator icon={<HomeOutlinedIcon />} label="홈" to="/" />
        <TabNavigator icon={<SearchRoundedIcon />} label="검색" to="" />
        <TabNavigator icon={<AddBoxOutlinedIcon />} label="코디 추가" to="" />
        <TabNavigator
          icon={<BookmarkBorderOutlinedIcon />}
          label="스크랩"
          to="/users/me/scraps"
        />
        <TabNavigator
          icon={<PersonOutlineOutlinedIcon />}
          label="마이"
          // TODO: 로그인시 '/users/me' 내 프로필 페이지로 라우팅
          to={isAuthenticated ? '' : '/login'}
        />
      </div>
    </>
  );
}

export default BottomTabBar;
