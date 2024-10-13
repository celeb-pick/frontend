import { Suspense } from 'react';
import tw from 'twin.macro';
import LocalApiErrorBoundary from '../../components/errors/LocalApiErrorBoundary';
import Layout from '../../components/templates/Layout';
import MyOutfitPostGrid from './components/MyOutfitPostGrid';
import MyOutfitPostGridSkeleton from './components/MyOutfitPostGridSkeleton';
import UserInfoSection from './components/UserInfoSection';
import UserInfoSectionSkeleton from './components/UserInfoSectionSkeleton';

function MyPage() {
  return (
    <Layout>
      <Layout.LogoAppBar />
      <LocalApiErrorBoundary>
        <Suspense fallback={<UserInfoSectionSkeleton />}>
          <UserInfoSection />
        </Suspense>
      </LocalApiErrorBoundary>
      <h1 css={[tw`px-4 pt-5 pb-3.5 text-lg font-bold`]}>내가 추가한 코디</h1>
      <LocalApiErrorBoundary>
        <Suspense fallback={<MyOutfitPostGridSkeleton />}>
          <MyOutfitPostGrid />
        </Suspense>
      </LocalApiErrorBoundary>
      <Layout.BottomTabBar />
    </Layout>
  );
}

export default MyPage;
