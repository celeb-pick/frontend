import { Link } from 'react-router-dom';
import tw from 'twin.macro';

function LayoutLogoAppBar() {
  return (
    <div className="custom-app-bar-container">
      <Link to="/" css={[tw`font-semibold text-xl py-4`]}>
        celeb pick
      </Link>
    </div>
  );
}

export default LayoutLogoAppBar;
