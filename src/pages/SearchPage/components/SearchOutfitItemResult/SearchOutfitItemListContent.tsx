import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useState } from 'react';
import tw from 'twin.macro';
import Chip from '../../../../components/atoms/Chip';
import OutfitScrapButton from '../../../../features/outfits/components/OutfitScrapButton';
import { OutfitItemListResponse } from '../../../../types/outfit';
import ItemRelatedOutfitModal from '../ItemRelatedOutfitModal';

interface SearchOutfitItemListContentProps {
  pagesData: Array<OutfitItemListResponse>;
}

interface SearchOutfitItemListRowProps {
  outfitItem: OutfitItemListResponse['results'][number];
}

function EmptyView() {
  return (
    <div className="h-40 flex-center">
      관련 코디 아이템이 존재하지 않습니다😥
    </div>
  );
}

function SearchOutfitItemListRow({ outfitItem }: SearchOutfitItemListRowProps) {
  const [isShowRelatedOutfitModal, setIsShowRelatedOutfitModal] =
    useState(false);

  return (
    <>
      <li
        key={outfitItem.id}
        css={[
          tw`flex-y-center flex-wrap gap-x-1 p-3 border-solid border-b scroll-mt-[--app-bar-height]`,
        ]}
      >
        <img
          src={outfitItem.image}
          alt={outfitItem.name}
          css={[tw`w-28 h-28 rounded`]}
        />
        <OutfitScrapButton
          outfitItemId={outfitItem.id}
          isScrapped={outfitItem.isScrapped}
        />
        <Chip label={outfitItem.brand.name} />
        <p css={[tw`flex-1 ml-1.5 line-clamp-3 break-words font-medium`]}>
          {outfitItem.name}
        </p>
        {!!outfitItem.relatedOutfitPostCount && (
          <div css={[tw`flex justify-end w-full`]}>
            <button
              type="button"
              css={[tw`flex-y-center gap-1 text-gray-700 p-1`]}
              onClick={() => setIsShowRelatedOutfitModal(true)}
            >
              <span css={[tw`font-semibold pt-[1px]`]}>
                {outfitItem.relatedOutfitPostCount}개의 관련 코디 보기
              </span>
              <ArrowCircleRightOutlinedIcon />
            </button>
          </div>
        )}
      </li>
      <ItemRelatedOutfitModal
        itemId={outfitItem.id}
        isShow={isShowRelatedOutfitModal}
        setIsShow={setIsShowRelatedOutfitModal}
      />
    </>
  );
}

function SearchOutfitItemListContent({
  pagesData,
}: SearchOutfitItemListContentProps) {
  const isEmpty = pagesData[0].count === 0;
  if (isEmpty) {
    return <EmptyView />;
  }

  return (
    <ul>
      {pagesData.map(({ results: outfitItemList }) =>
        outfitItemList.map((outfitItem) => (
          <SearchOutfitItemListRow
            key={outfitItem.id}
            outfitItem={outfitItem}
          />
        ))
      )}
    </ul>
  );
}

export default SearchOutfitItemListContent;
