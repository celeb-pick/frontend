import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import Chip from '../../../components/atoms/Chip';
import OutfitScrapButton from '../../../features/outfits/components/OutfitScrapButton';
import { MyScrapOutfitItemListResponse } from '../../../types/scrap';

interface OutfitItemListContentProps {
  pagesData: Array<MyScrapOutfitItemListResponse>;
}

interface OutfitItemListRowProps {
  outfitItem: MyScrapOutfitItemListResponse['results'][number];
}

function EmptyView() {
  return (
    <div className="h-40 flex-center">아직 스크랩한 코디가 없습니다😶</div>
  );
}

function OutfitItemListRow({ outfitItem }: OutfitItemListRowProps) {
  const outfitItemRef = useRef<HTMLLIElement>(null);
  const { outfitItemId: outfitItemIdParam } = useParams();

  useEffect(() => {
    if (!outfitItemIdParam || !outfitItemRef.current) {
      return;
    }
    if (Number(outfitItemIdParam) === outfitItem.id) {
      outfitItemRef.current.scrollIntoView();
    }
  }, [outfitItemIdParam, outfitItemRef, outfitItem]);

  return (
    <li
      ref={outfitItemRef}
      key={outfitItem.id}
      css={[tw`flex-y-center flex-wrap gap-x-2.5 p-3 border-solid border-b `]}
    >
      <div css={[tw`relative`]}>
        <img
          src={outfitItem.imageUrl}
          alt={outfitItem.name}
          css={[tw`w-28 h-28 rounded`]}
        />
        <OutfitScrapButton
          outfitItemId={outfitItem.id}
          isScrapped={outfitItem.isScrapped}
          css={[tw`absolute top-0 right-0 p-1`]}
        />
      </div>
      <Chip label={outfitItem.brand.name} />
      <p css={[tw`flex-1 line-clamp-3 break-words font-medium`]}>
        {outfitItem.name}
      </p>
      {!!outfitItem.purchaseLink && (
        <div css={[tw`flex justify-end w-full`]}>
          <a
            href={outfitItem.purchaseLink}
            target="_blank"
            type="button"
            css={[tw`flex-y-center gap-1 text-gray-700 p-1`]}
            rel="noreferrer"
          >
            <span css={[tw`font-semibold pt-[1px]`]}>구매하러 가기</span>
            <ArrowCircleRightOutlinedIcon />
          </a>
        </div>
      )}
    </li>
  );
}

function OutfitItemListContent({ pagesData }: OutfitItemListContentProps) {
  const isEmpty = pagesData[0].count === 0;
  if (isEmpty) {
    return <EmptyView />;
  }

  return (
    <ul>
      {pagesData.map(({ results: outfitItemList }) =>
        outfitItemList.map((outfitItem) => (
          <OutfitItemListRow key={outfitItem.id} outfitItem={outfitItem} />
        ))
      )}
    </ul>
  );
}

export default OutfitItemListContent;
