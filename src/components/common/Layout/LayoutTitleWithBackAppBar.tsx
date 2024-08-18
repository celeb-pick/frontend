import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { ComponentPropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import IconButton from '../../atoms/IconButton';

interface LayoutTitleWithBackAppBarProps
  extends ComponentPropsWithoutRef<'div'> {
  title: string;
  navigateTo: string;
}

function LayoutTitleWithBackAppBar({
  title,
  navigateTo,
}: LayoutTitleWithBackAppBarProps) {
  const navigate = useNavigate();

  return (
    <div className="custom-app-bar-container" css={[tw`sticky top-0`]}>
      <IconButton
        icon={<ArrowBackIosNewRoundedIcon />}
        onClick={() => navigate(navigateTo)}
      />
      <span
        css={[tw`absolute left-1/2 -translate-x-1/2 text-xl font-semibold`]}
      >
        {title}
      </span>
    </div>
  );
}

export default LayoutTitleWithBackAppBar;
