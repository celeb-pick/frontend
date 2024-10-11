import { Suspense } from 'react';
import LocalApiErrorBoundary from '../../../../components/errors/LocalApiErrorBoundary';
import OutfitItemFilter from '../../../../features/outfits/components/OutfitItemFilter/OutfitItemFilter';
import SearchOutfitItemList from './SearchOutfitItemList';
import SearchOutfitItemListSkeleton from './SearchOutfitItemListSkeleton';

function SearchOutfitItemResult() {
  return (
    <>
      <OutfitItemFilter />
      <LocalApiErrorBoundary>
        <Suspense fallback={<SearchOutfitItemListSkeleton />}>
          <SearchOutfitItemList />
        </Suspense>
      </LocalApiErrorBoundary>
    </>
  );
}

export default SearchOutfitItemResult;
