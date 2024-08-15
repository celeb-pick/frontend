import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { ComponentPropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import IconButton from '../../atoms/icon-button';

interface TitleWithBackAppBarProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  navigateTo: string;
}

function TitleWithBackAppBar({ title, navigateTo }: TitleWithBackAppBarProps) {
  const navigate = useNavigate();

  return (
    <div className="custom-app-bar-container">
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

export default TitleWithBackAppBar;
