import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import InfiniteScrollFetchTrigger from '../../../../components/utils/InfiniteScrollFetchTrigger';
import useFetchOutfitItemList from '../../../../features/outfits/queries/useFetchOutfitItemList';
import {
  OutfitItemCategory,
  OutfitItemListRequest,
} from '../../../../types/outfit';
import SearchOutfitItemListContent from './SearchOutfitItemListContent';
import SearchOutfitItemListLoader from './SearchOutfitItemListLoader';

function SearchOutfitItemList() {
  const [searchParams] = useSearchParams();
  const itemCategory = searchParams.get('itemCategory') as OutfitItemCategory;
  const searchQuery = searchParams.get('query');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);

  const req: OutfitItemListRequest = {
    queryParams: {
      itemCategory,
      search: debouncedSearchQuery,
    },
  };

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchOutfitItemList(req);

  return (
    <div>
      <SearchOutfitItemListContent pagesData={data.pages} />
      <SearchOutfitItemListLoader isFetching={isFetchingNextPage} />
      <InfiniteScrollFetchTrigger
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}

export default SearchOutfitItemList;
