import { Suspense } from 'react';
import Layout from '../../components/common/layout';
import LocalApiErrorBoundary from '../../components/errors/local-api-error-boundary';
import OutfitFeedSkeleton from '../../features/outfits/outfit-feed/outfit-feed-skeleton';
import OutfitFilter from '../../features/outfits/outfit-filter';
import HomeOutfitFeed from './home-outfit-feed';

function HomePage() {
  return (
    <Layout>
      <Layout.LogoAppBar />
      <OutfitFilter />
      <LocalApiErrorBoundary>
        <Suspense fallback={<OutfitFeedSkeleton />}>
          <HomeOutfitFeed />
        </Suspense>
      </LocalApiErrorBoundary>
      <Layout.BottomTabBar />
    </Layout>
  );
}

export default HomePage;
