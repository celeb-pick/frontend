import OutfitItemScrapButton from './OutfitItemScrapButton';
import OutfitPostScrapButton from './OutfitPostScrapButton';
import { OutfitScrapButtonProvider } from './OutfitScrapButtonProvider';

export interface OutfitScrapButtonProps {
  outfitPostId?: number;
  outfitItemId?: number;
  isScrapped: boolean | null;
  scrapCount?: number;
  className?: string;
}

function OutfitScrapButton(props: OutfitScrapButtonProps) {
  const { outfitPostId, outfitItemId } = props;
  if (!outfitPostId && !outfitItemId) {
    throw Error(
      'OutfitScrapButton 컴포넌트에 `outfitPostId` 혹은 `outfitItemId` prop이 존재해야 합니다.'
    );
  }

  const ButtomComponent = outfitPostId
    ? OutfitPostScrapButton
    : OutfitItemScrapButton;

  return (
    <OutfitScrapButtonProvider {...props}>
      <ButtomComponent />
    </OutfitScrapButtonProvider>
  );
}

export default OutfitScrapButton;
