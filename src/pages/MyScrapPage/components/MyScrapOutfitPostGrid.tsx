import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import Spinner from '../../../components/atoms/Spinner';
import Grid from '../../../components/templates/Grid';
import InfiniteScrollFetchTrigger from '../../../components/utils/InfiniteScrollFetchTrigger';
import OutfitScrapButton from '../../../features/outfits/components/OutfitScrapButton';
import useFetchMyScrapOutfitPostList from '../../../features/scraps/queries/useFetchMyScrapOutfitPostList';
import { MyScrapOutfitPostListResponse } from '../../../types/scrap';

interface GridContentProps {
  pagesData: Array<MyScrapOutfitPostListResponse>;
}

function EmptyView() {
  return (
    <div className="h-40 flex-center">아직 스크랩한 코디가 없습니다😶</div>
  );
}

function GridContent({ pagesData }: GridContentProps) {
  const navigate = useNavigate();

  const handleClickGridItem = (outfitPostId: number) => {
    navigate(`/users/me/scraps/outfit-posts/${outfitPostId}`);
  };

  const isEmpty = pagesData[0].count === 0;
  if (isEmpty) {
    return <EmptyView />;
  }

  return (
    <Grid>
      {pagesData.map(({ results: outfitPostList }) =>
        outfitPostList.map((outfitPost) => (
          <div
            key={outfitPost.id}
            role="gridcell"
            onClick={() => handleClickGridItem(outfitPost.id)}
            onKeyDown={() => handleClickGridItem(outfitPost.id)}
            tabIndex={0}
            css={[tw`relative cursor-pointer`]}
          >
            <img
              src={outfitPost.image}
              alt={outfitPost.title}
              css={[tw`w-full h-full`]}
            />
            <OutfitScrapButton
              outfitPostId={outfitPost.id}
              isScrapped={outfitPost.isScrapped}
              css={[tw`absolute top-0 right-0`]}
            />
          </div>
        ))
      )}
    </Grid>
  );
}

function MyScrapOutfitPostGrid() {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchMyScrapOutfitPostList();

  return (
    <div>
      <GridContent pagesData={data.pages} />
      {isFetchingNextPage && <Spinner size={30} css={tw`py-4`} />}
      <InfiniteScrollFetchTrigger
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}

export default MyScrapOutfitPostGrid;
