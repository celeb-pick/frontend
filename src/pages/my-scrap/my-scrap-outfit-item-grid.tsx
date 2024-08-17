import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import Spinner from '../../components/atoms/spinner';
import InfiniteScrollFetchTrigger from '../../components/common/infinite-scroll-fetch-trigger';
import Grid from '../../components/templates/grid';
import OutfitScrapButton from '../../features/outfits/outfit-scrap-button';
import useFetchMyScrapOutfitItemList from '../../hooks/queries/useFetchMyScrapOutfitItemList';
import { MyScrapOutfitItemListResponse } from '../../types/scrap';

interface GridContentProps {
  pagesData: Array<MyScrapOutfitItemListResponse>;
}

function EmptyView() {
  return (
    <div className="h-40 flex-center">아직 스크랩한 아이템이 없습니다😶</div>
  );
}

function GridContent({ pagesData }: GridContentProps) {
  const navigate = useNavigate();

  const handleClickGridItem = (outfitItemId: number) => {
    navigate(`/users/me/scraps/outfit-items/${outfitItemId}`);
  };

  const isEmpty = pagesData[0].count === 0;
  if (isEmpty) {
    return <EmptyView />;
  }

  return (
    <Grid>
      {pagesData.map(({ results: outfitItemList }) =>
        outfitItemList.map((outfitItem) => (
          <div
            key={outfitItem.id}
            role="gridcell"
            onClick={() => handleClickGridItem(outfitItem.id)}
            onKeyDown={() => handleClickGridItem(outfitItem.id)}
            tabIndex={0}
            css={[tw`relative cursor-pointer`]}
          >
            <img
              src={outfitItem.imageUrl}
              alt={outfitItem.name}
              css={[tw`w-full h-full`]}
            />
            <OutfitScrapButton
              outfitItemId={outfitItem.id}
              isScrapped={outfitItem.isScrapped}
              css={[tw`absolute top-0 right-0`]}
            />
          </div>
        ))
      )}
    </Grid>
  );
}

function MyScrapOutfitItemGrid() {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchMyScrapOutfitItemList();

  return (
    <div>
      <GridContent pagesData={data.pages} />
      {isFetchingNextPage && <Spinner size={30} css={tw`py-4`} />}
      <InfiniteScrollFetchTrigger
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}

export default MyScrapOutfitItemGrid;
