import { cloneElement, ComponentPropsWithoutRef, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tw from 'twin.macro';
import MaterialSymbol from '../../atoms/material-symbol';

interface TabNavigatorProps {
  icon: ReactElement;
  label: string;
  to: string;
}

function TabNavigator({ icon, label, to }: TabNavigatorProps) {
  const location = useLocation();

  type IconProps = ComponentPropsWithoutRef<typeof MaterialSymbol>;
  const Icon = cloneElement<IconProps>(icon, {
    fill: to === location.pathname,
  });

  return (
    <Link
      css={[
        tw`flex flex-col gap-y-0.5 justify-between items-center h-full px-4 py-2`,
      ]}
      to={to}
    >
      {Icon}
      <span css={[tw`font-medium text-sm`]}>{label}</span>
    </Link>
  );
}

const layoutStyle = tw`
  z-20 fixed bottom-0 max-w-[calc(var(--layout-max-width) - 4px)] w-full h-[--bottom-tab-bar-height]
  bg-white border-t border-solid border-gray-100
`;

function BottomTabBar() {
  return (
    <div css={[layoutStyle, tw`flex-y-center justify-around`]}>
      <TabNavigator
        icon={<MaterialSymbol name="home" size={28} wght={350} />}
        label="홈"
        to="/"
      />
      <TabNavigator
        icon={<MaterialSymbol name="search" size={26} wght={350} />}
        label="검색"
        to=""
      />
      <TabNavigator
        icon={<MaterialSymbol name="add_box" size={26} wght={350} />}
        label="코디 추가"
        to=""
      />
      <TabNavigator
        icon={<MaterialSymbol name="bookmark" size={27} wght={350} />}
        label="스크랩"
        to=""
      />
      <TabNavigator
        icon={<MaterialSymbol name="person" size={29} wght={300} />}
        label="마이"
        to=""
      />
    </div>
  );
}

export default BottomTabBar;
