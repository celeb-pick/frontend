import { Suspense } from 'react';
import LocalApiErrorBoundary from '../../components/errors/LocalApiErrorBoundary';
import Layout from '../../components/templates/Layout';
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
      <Layout.BottomTabBar />
    </Layout>
  );
}

export default MyPage;
