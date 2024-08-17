import tw from 'twin.macro';
import Spinner from '../../components/atoms/spinner';
import InfiniteScrollFetchTrigger from '../../components/common/infinite-scroll-fetch-trigger';
import useFetchMyScrapOutfitItemList from '../../hooks/queries/useFetchMyScrapOutfitItemList';
import OutfitItemListContent from './outfit-item-list-content';

function OutfitItemList() {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchMyScrapOutfitItemList();

  return (
    <div>
      <OutfitItemListContent pagesData={data.pages} />
      {isFetchingNextPage && <Spinner size={30} css={tw`py-4`} />}
      <InfiniteScrollFetchTrigger
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}

export default OutfitItemList;
