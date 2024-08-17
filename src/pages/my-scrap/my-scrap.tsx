import { Suspense } from 'react';
import Layout from '../../components/common/layout';
import LocalApiErrorBoundary from '../../components/errors/local-api-error-boundary';
import MyScrapGridSkeleton from './my-scrap-grid-skeleton';
import MyScrapOutfitItemGrid from './my-scrap-outfit-item-grid';
import MyScrapOutfitPostGrid from './my-scrap-outfit-post-grid';
import MyScrapTabBar from './my-scrap-tab-bar';
import { MyScrapTabType } from './types';
import useTabQueryParam from './useTabQueryParam';

function MyScrapPage() {
  const [tab] = useTabQueryParam();

  const MyScrapGrid =
    tab === ('outfitPost' satisfies MyScrapTabType)
      ? MyScrapOutfitPostGrid
      : MyScrapOutfitItemGrid;

  return (
    <Layout>
      <Layout.LogoAppBar />
      <MyScrapTabBar />
      <LocalApiErrorBoundary>
        <Suspense fallback={<MyScrapGridSkeleton />}>
          <MyScrapGrid />
        </Suspense>
      </LocalApiErrorBoundary>
      <Layout.BottomTabBar />
    </Layout>
  );
}

export default MyScrapPage;
