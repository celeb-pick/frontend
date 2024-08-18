import tw from 'twin.macro';
import Chip from '../../../../../../components/atoms/Chip';
import OutfitScrapButton from '../../../OutfitScrapButton';

interface OutfitPostSliderInfoProps {
  outfitPostId?: number;
  outfitItemId?: number;
  scrapCount: number;
  isScrapped: boolean | null;
  chipLabel: string;
  description: string;
}

function OutfitPostSliderInfo({
  outfitPostId,
  outfitItemId,
  scrapCount,
  isScrapped,
  chipLabel,
  description,
}: OutfitPostSliderInfoProps) {
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

export default OutfitPostSliderInfo;
