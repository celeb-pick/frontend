import tw from 'twin.macro';
import Chip from '../../../../../components/atoms/chip';
import OutfitScrapButton from '../../../outfit-scrap-button';

interface OutfitInfoProps {
  outfitPostId?: number;
  outfitItemId?: number;
  scrapCount: number;
  isScrapped: boolean | null;
  chipLabel: string;
  description: string;
}

function OutfitInfo({
  outfitPostId,
  outfitItemId,
  scrapCount,
  isScrapped,
  chipLabel,
  description,
}: OutfitInfoProps) {
  return (
    <div css={[tw`flex-y-center gap-x-1 pl-1 pr-4 py-2.5`]}>
      <OutfitScrapButton
        scrapCount={scrapCount}
        isScrapped={isScrapped}
        outfitPostId={outfitPostId}
        outfitItemId={outfitItemId}
      />
      <Chip
        label={chipLabel}
        color={outfitPostId ? 'indigo' : 'gray'}
        variant="filled"
      />
      <p css={[tw` pl-1 line-clamp-2 font-medium`]}>{description}</p>
    </div>
  );
}

export default OutfitInfo;
