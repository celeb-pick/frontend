import { Suspense } from 'react';
import LocalApiErrorBoundary from '../../components/errors/LocalApiErrorBoundary';
import Layout from '../../components/templates/Layout';
import OutfitItemList from './components/OutfitItemList';
import OutfitItemListSkeleton from './components/OutfitItemListSkeleton';

function MyScrapOutfitItemPage() {
  return (
    <Layout>
      <Layout.TitleWithBackAppBar
        title="스크랩한 아이템"
        navigateTo="/users/me/scraps?tab=outfitItem"
      />
      <LocalApiErrorBoundary>
        <Suspense fallback={<OutfitItemListSkeleton />}>
          {/* FIXME URL로 접근했을 시 데이터가 불러와지지않아 해당 포스트로 스크롤되지 않는 버그 존재 */}
          {/* TODO 커서 방식으로 변경하면 req cursor에 outfitItemtId값 추가 */}
          <OutfitItemList />
        </Suspense>
      </LocalApiErrorBoundary>
    </Layout>
  );
}

export default MyScrapOutfitItemPage;
