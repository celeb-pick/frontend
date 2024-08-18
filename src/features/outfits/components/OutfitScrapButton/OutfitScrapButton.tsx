import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import isNil from 'lodash.isnil';
import tw from 'twin.macro';
import IconButton from '../../../../components/atoms/IconButton';
import useAuthStatus from '../../../auths/hooks/useAuthStatus';
import useOutfitItemScrap from './useOutfitItemScrap';
import useOutfitPostScrap from './useOutfitPostScrap';

export interface OutfitScrapButtonProps {
  outfitPostId?: number;
  outfitItemId?: number;
  isScrapped: boolean | null;
  scrapCount?: number;
  className?: string;
}

function OutfitScrapButton({
  outfitPostId,
  outfitItemId,
  isScrapped,
  scrapCount,
  className,
}: OutfitScrapButtonProps) {
  if (!outfitPostId && !outfitItemId) {
    throw Error(
      'OutfitScrapButton 컴포넌트에 `outfitPostId` 혹은 `outfitItemId` prop이 존재해야 합니다.'
    );
  }

  const { isAuthenticated } = useAuthStatus();

  const outfitItemScrapper = useOutfitItemScrap({
    isScrapped,
    scrapCount,
    outfitItemId,
  });
  const outfitPostScrapper = useOutfitPostScrap({
    isScrapped,
    scrapCount,
    outfitPostId,
  });

  const { updatedIsScrapped, updatedScrapCount, toggleScrap, isPending } =
    outfitPostId ? outfitPostScrapper : outfitItemScrapper;

  // UX 개선을 위해 updatedIsScrapped, updatedScrapCount 값이 있다면
  // 해당 값을 스크랩 요청의 응답이 오기도 전에 화면 상에 보여줍니다.
  const optimisticIsScrapped = updatedIsScrapped ?? isScrapped;
  const optimisticScrapCount = updatedScrapCount ?? scrapCount;

  const ScrapIcon = optimisticIsScrapped
    ? BookmarkRoundedIcon
    : BookmarkBorderRoundedIcon;

  return (
    <IconButton
      onClick={(event) => {
        event.stopPropagation();
        toggleScrap();
      }}
      disabled={!isAuthenticated || isPending}
      icon={
        <>
          <ScrapIcon
            css={[tw`mr-0.5`, optimisticIsScrapped && tw`fill-yellow-300`]}
          />
          {!isNil(optimisticScrapCount) && (
            <span css={[tw`font-medium`]}>{optimisticScrapCount}</span>
          )}
        </>
      }
      className={className}
    />
  );
}

export default OutfitScrapButton;
