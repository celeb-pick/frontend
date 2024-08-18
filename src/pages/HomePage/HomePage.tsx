import { Suspense } from 'react';
import LocalApiErrorBoundary from '../../components/errors/LocalApiErrorBoundary';
import Layout from '../../components/templates/Layout';
import OutfitFeedSkeleton from '../../features/outfits/components/OutfitFeed/OutfitFeedSkeleton';
import OutfitFilter from '../../features/outfits/components/OutfitFilter';
import HomeOutfitFeed from './components/HomeOutfitFeed';

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
