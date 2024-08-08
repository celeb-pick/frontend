import { Link } from 'react-router-dom';
import tw from 'twin.macro';

function AppBar() {
  return (
    <div
      css={[
        tw`flex-y-center h-16 px-4 border-b border-solid border-gray-100 bg-white`,
      ]}
    >
      <Link to="/" css={[tw`font-semibold text-xl py-4`]}>
        celeb pick
      </Link>
    </div>
  );
}

export default AppBar;
