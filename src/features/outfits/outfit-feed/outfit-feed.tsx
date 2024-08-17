import type {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
} from '@tanstack/react-query';
import type { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import InfiniteScrollFetchTrigger from '../../../components/common/infinite-scroll-fetch-trigger';
import type { OutfitPostListResponse } from '../../../types/outfit';
import OutfitFeedPostLoader from './outfit-feed-post-loader';
import OutfitPostList from './outfit-post-list';

interface OutfitFeedProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Tanstack Query `useSuspenseInfiniteQuery` 메서드의
   * 호출값을 주입 받습니다.
   */
  suspenseInfiniteQueryResult: UseSuspenseInfiniteQueryResult<
    InfiniteData<OutfitPostListResponse>
  >;
}

/**
 * 홈 페이지, 검색 페이지 등 다양한 곳에서 코디 피드 컴포넌트를
 * 구현 하는데 사용되는 컴포넌트 입니다.
 */
function OutfitFeed({
  suspenseInfiniteQueryResult,
  ...props
}: OutfitFeedProps) {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    suspenseInfiniteQueryResult;

  return (
    <div css={[tw`w-full h-full`]} {...props}>
      <OutfitPostList pagesData={data.pages} />
      <OutfitFeedPostLoader isFetching={isFetchingNextPage} />
      <InfiniteScrollFetchTrigger
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}

export default OutfitFeed;
