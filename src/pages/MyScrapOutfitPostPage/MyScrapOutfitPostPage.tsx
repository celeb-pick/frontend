import { Suspense } from 'react';
import LocalApiErrorBoundary from '../../components/errors/LocalApiErrorBoundary';
import Layout from '../../components/templates/Layout';
import OutfitFeed from '../../features/outfits/components/OutfitFeed';
import OutfitFeedSkeleton from '../../features/outfits/components/OutfitFeed/OutfitFeedSkeleton';
import useFetchMyScrapOutfitPostList from '../../hooks/queries/useFetchMyScrapOutfitPostList';

function MyScrapOutfitPostPage() {
  return (
    <Layout>
      <Layout.TitleWithBackAppBar
        title="스크랩한 코디"
        navigateTo="/users/me/scraps"
      />
      <LocalApiErrorBoundary>
        <Suspense fallback={<OutfitFeedSkeleton />}>
          <OutfitFeed
            // FIXME URL로 접근했을 시 데이터가 불러와지지않아 해당 포스트로 스크롤되지 않는 버그 존재
            // TODO 커서 방식으로 변경하면 req cursor에 outfitPostId값 추가
            suspenseInfiniteQueryResult={useFetchMyScrapOutfitPostList()}
          />
        </Suspense>
      </LocalApiErrorBoundary>
    </Layout>
  );
}

export default MyScrapOutfitPostPage;
