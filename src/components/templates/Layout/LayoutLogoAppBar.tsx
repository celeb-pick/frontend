import { Link } from 'react-router-dom';
import tw from 'twin.macro';

function LayoutLogoAppBar() {
  return (
    <div className="custom-app-bar-container">
      <Link to="/" css={[tw`font-logo font-medium text-lg py-4`]}>
        셀럽픽
      </Link>
    </div>
  );
}

export default LayoutLogoAppBar;
