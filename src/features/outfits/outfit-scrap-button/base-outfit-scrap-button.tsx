import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import { MouseEventHandler } from 'react';
import tw from 'twin.macro';
import IconButton from '../../../components/atoms/icon-button';
import useAuthStatus from '../../../hooks/useAuthStatus';
import { useOutfitScrapButtonContext } from './useOutfitScrapButtonContext';

interface BaseOutfitScrapButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  updatedIsScrapped: boolean | undefined;
  updatedScrapCount: number | undefined;
  disabled?: boolean;
}

function BaseOutfitScrapButton({
  onClick,
  updatedIsScrapped,
  updatedScrapCount,
  disabled,
}: BaseOutfitScrapButtonProps) {
  const { isAuthenticated } = useAuthStatus();
  const context = useOutfitScrapButtonContext();

  const isScrapped =
    typeof updatedIsScrapped === 'undefined'
      ? context.isScrapped
      : updatedIsScrapped;

  const scrapCount =
    typeof updatedScrapCount === 'undefined'
      ? context.scrapCount
      : updatedScrapCount;

  const ScrapIcon = isScrapped
    ? BookmarkRoundedIcon
    : BookmarkBorderRoundedIcon;

  return (
    <IconButton
      onClick={onClick}
      disabled={!isAuthenticated || disabled}
      icon={
        <>
          <ScrapIcon css={[tw`mr-0.5`, isScrapped && tw`fill-yellow-300`]} />
          <span css={[tw`font-medium`]}>{scrapCount}</span>
        </>
      }
    />
  );
}

export default BaseOutfitScrapButton;