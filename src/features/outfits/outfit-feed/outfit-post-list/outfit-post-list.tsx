import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import type { OutfitPostListResponse } from '../../../../types/outfit';
import OutfitPost from '../outfit-post';

interface OutfitPostListProps extends ComponentPropsWithoutRef<'div'> {
  pagesData: Array<OutfitPostListResponse>;
}

function EmptyView() {
  return (
    <div className="h-40 flex-center">관련 코디가 존재하지 않습니다😥</div>
  );
}

function OutfitPostList({ pagesData, ...props }: OutfitPostListProps) {
  const isEmpty = pagesData[0].count === 0;
  if (isEmpty) {
    return <EmptyView />;
  }

  return (
    <div css={[tw`flex flex-col gap-y-1`]} {...props}>
      {pagesData.map(({ results: outfitPostList }) =>
        outfitPostList.map((outfitPost) => (
          <OutfitPost key={outfitPost.id} outfitPost={outfitPost} />
        ))
      )}
    </div>
  );
}

export default OutfitPostList;
