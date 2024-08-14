import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import tw from 'twin.macro';
import Chip from '../../../../../components/atoms/chip';
import IconButton from '../../../../../components/atoms/icon-button';

interface OutfitInfoProps {
  type: 'outfitPost' | 'outfitItem';
  scrapCount: number;
  isScrapped: boolean | null;
  chipLabel: string;
  description: string;
}

function OutfitInfo({
  type,
  scrapCount,
  isScrapped,
  chipLabel,
  description,
}: OutfitInfoProps) {
  const handleClickScrapButton = () => {};

  const ScrapIcon = isScrapped
    ? BookmarkRoundedIcon
    : BookmarkBorderRoundedIcon;

  return (
    <div css={[tw`flex-y-center gap-x-1 pl-1 pr-4 py-2.5`]}>
      <IconButton
        onClick={handleClickScrapButton}
        icon={
          <>
            <ScrapIcon css={[tw`mr-0.5`, isScrapped && tw`fill-yellow-300`]} />
            <span css={[tw`font-medium`]}>{scrapCount}</span>
          </>
        }
      />
      <Chip
        label={chipLabel}
        color={type === 'outfitPost' ? 'indigo' : 'gray'}
        variant="filled"
      />
      <p css={[tw` pl-1 line-clamp-2 font-medium`]}>{description}</p>
    </div>
  );
}

export default OutfitInfo;
