import OutfitFeed from '../../../../features/outfits/components/OutfitFeed';
import useFetchOutfitPostList from '../../../../features/outfits/queries/useFetchOutfitPostList';
import { OutfitPostListRequest } from '../../../../types/outfit';

interface ItemRelatedOutfitFeedProps {
  itemId: number;
}

function ItemRelatedOutfitFeed({ itemId }: ItemRelatedOutfitFeedProps) {
  const req: OutfitPostListRequest = {
    queryParams: {
      itemId,
    },
  };

  return (
    <OutfitFeed suspenseInfiniteQueryResult={useFetchOutfitPostList(req)} />
  );
}

export default ItemRelatedOutfitFeed;
