import { Suspense } from 'react';
import Layout from '../../components/common/Layout';
import LocalApiErrorBoundary from '../../components/errors/LocalApiErrorBoundary';
import MyScrapGridSkeleton from './components/MyScrapGridSkeleton';
import MyScrapOutfitItemGrid from './components/MyScrapOutfitItemGrid';
import MyScrapOutfitPostGrid from './components/MyScrapOutfitPostGrid';
import MyScrapTabBar from './components/MyScrapTabBar';
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
