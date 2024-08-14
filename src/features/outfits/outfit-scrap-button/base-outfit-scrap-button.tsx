import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import { MouseEventHandler } from 'react';
import tw from 'twin.macro';
import IconButton from '../../../components/atoms/icon-button';
import { useOutfitScrapButtonContext } from './useOutfitScrapButtonContext';

interface BaseOutfitScrapButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function BaseOutfitScrapButton({ onClick }: BaseOutfitScrapButtonProps) {
  const { isScrapped, scrapCount } = useOutfitScrapButtonContext();

  const ScrapIcon = isScrapped
    ? BookmarkRoundedIcon
    : BookmarkBorderRoundedIcon;

  return (
    <IconButton
      onClick={onClick}
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
