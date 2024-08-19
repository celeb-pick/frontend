import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ComponentPropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import IconButton from '../../atoms/IconButton';

interface LayoutTitleWithCloseAppBarProps
  extends ComponentPropsWithoutRef<'div'> {
  title: string;
  navigateTo: string;
}

function LayoutTitleWithCloseAppBar({
  title,
  navigateTo,
}: LayoutTitleWithCloseAppBarProps) {
  const navigate = useNavigate();

  return (
    <div className="custom-app-bar-container" css={[tw`sticky top-0`]}>
      <span
        css={[tw`absolute left-1/2 -translate-x-1/2 text-xl font-semibold`]}
      >
        {title}
      </span>
      <IconButton
        icon={<CloseRoundedIcon />}
        onClick={() => navigate(navigateTo)}
        css={[tw`ml-auto`]}
      />
    </div>
  );
}

export default LayoutTitleWithCloseAppBar;
