import { useSearchParams } from 'react-router-dom';
import OutfitFeed from '../../../features/outfits/components/OutfitFeed';
import useFetchOutfitPostList from '../../../hooks/queries/useFetchOutfitPostList';
import { CelebrityCategory } from '../../../types/celebrity';
import { OutfitPostGender, OutfitPostListRequest } from '../../../types/outfit';

function HomeOutfitFeed() {
  const [searchParams] = useSearchParams();

  const gender = searchParams.get('gender') as OutfitPostGender;
  const celebrityCategory = searchParams.get(
    'celebrityCategory'
  ) as CelebrityCategory;

  const req: OutfitPostListRequest = {
    queryParams: {
      gender,
      celebrityCategory,
    },
  };

  return (
    <OutfitFeed suspenseInfiniteQueryResult={useFetchOutfitPostList(req)} />
  );
}

export default HomeOutfitFeed;
