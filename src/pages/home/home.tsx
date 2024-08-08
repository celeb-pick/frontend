import { Suspense } from 'react';
import OutfitFeedSkeleton from '../../features/outfits/outfit-feed/outfit-feed-skeleton';
import OutfitFilter from '../../features/outfits/outfit-filter';
import HomeOutfitFeed from './home-outfit.feed';

function HomePage() {
  return (
    <div>
      <OutfitFilter />
      <Suspense fallback={<OutfitFeedSkeleton />}>
        <HomeOutfitFeed />
      </Suspense>
    </div>
  );
}

export default HomePage;
