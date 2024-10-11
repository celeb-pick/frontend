import { Suspense } from 'react';
import LocalApiErrorBoundary from '../../../../components/errors/LocalApiErrorBoundary';
import OutfitFeedSkeleton from '../../../../features/outfits/components/OutfitFeed/OutfitFeedSkeleton';
import OutfitFilter from '../../../../features/outfits/components/OutfitFilter';
import SearchOutfitFeed from './SearchOutfitFeed';

function SearchOutfitResult() {
  return (
    <>
      <OutfitFilter />
      <LocalApiErrorBoundary>
        <Suspense fallback={<OutfitFeedSkeleton />}>
          <SearchOutfitFeed />
        </Suspense>
      </LocalApiErrorBoundary>
    </>
  );
}

export default SearchOutfitResult;
