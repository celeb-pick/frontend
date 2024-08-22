import { useId } from 'react';
import tw from 'twin.macro';
import { CelebrityListResponse } from '../../../../types/celebrity';
import CelebrityListContentItem from './CelebrityListContentItem';

interface CelebrityListContentProps {
  pagesData: Array<CelebrityListResponse>;
}

function EmptyView() {
  return (
    <div className="h-40 flex-center">관련 셀럽이 존재하지 않습니다😥</div>
  );
}

function CelebrityListContent({ pagesData }: CelebrityListContentProps) {
  const celebrityRadioGroupId = useId();

  const isEmpty = pagesData[0].count === 0;
  if (isEmpty) {
    return <EmptyView />;
  }

  return (
    <div css={[tw`grid grid-cols-4 gap-4 w-full`]}>
      {pagesData.map(({ results: celebrityList }) =>
        celebrityList.map((celebrity) => (
          <CelebrityListContentItem
            key={celebrity.id}
            celebrity={celebrity}
            celebrityRadioGroupId={celebrityRadioGroupId}
          />
        ))
      )}
    </div>
  );
}

export default CelebrityListContent;
