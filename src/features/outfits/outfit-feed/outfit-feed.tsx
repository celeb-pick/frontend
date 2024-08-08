import type {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
} from '@tanstack/react-query';
import type { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import type { OutfitPostListResponse } from '../../../types/outfit';
import OutfitFeedFetchTrigger from './outfit-feed-fetch-trigger';
import OutfitFeedPostLoader from './outfit-feed-post-loader';
import OutfitPostList from './outfit-post-list';

interface OutfitFeedProps extends ComponentPropsWithoutRef<'div'> {
  suspenseInfiniteQueryResult: UseSuspenseInfiniteQueryResult<
    InfiniteData<OutfitPostListResponse>
  >;
}

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
      <OutfitFeedFetchTrigger
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}

export default OutfitFeed;
