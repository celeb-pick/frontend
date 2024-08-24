import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import { tailwindColors } from '../../../constants/tailwind';
import Button from '../Button';

interface MoreButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof Button>, 'children'> {}

function MoreButton({ ...props }: MoreButtonProps) {
  return (
    <Button
      css={[
        tw`bg-white border-solid border border-gray-700 text-gray-700 disabled:border-none`,
        {
          '&:hover&:not([disabled])': {
            backgroundColor: tailwindColors.gray['200'],
          },
        },
      ]}
      {...props}
    >
      <span>더보기</span>
      <ExpandMoreRoundedIcon />
    </Button>
  );
}

export default MoreButton;
