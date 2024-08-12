import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import IconButton from '../../components/atoms/icon-button';

function SignupAppBar() {
  const navigate = useNavigate();

  return (
    <div
      css={[
        tw`flex-y-center h-16 px-4 border-b border-solid border-gray-100 bg-white`,
      ]}
    >
      <IconButton
        icon={<ArrowBackIosNewRoundedIcon />}
        onClick={() => navigate('/login')}
      />
      <span
        css={[tw`absolute left-1/2 -translate-x-1/2 text-xl font-semibold`]}
      >
        회원가입
      </span>
    </div>
  );
}

export default SignupAppBar;
