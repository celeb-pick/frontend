import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import OutfitFeed from '../../../../features/outfits/components/OutfitFeed';
import useFetchOutfitPostList from '../../../../features/outfits/queries/useFetchOutfitPostList';
import { CelebrityCategory } from '../../../../types/celebrity';
import {
  OutfitPostGender,
  OutfitPostListRequest,
} from '../../../../types/outfit';

function SearchOutfitFeed() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);

  const gender = searchParams.get('gender') as OutfitPostGender;
  const celebrityCategory = searchParams.get(
    'celebrityCategory'
  ) as CelebrityCategory;

  const req: OutfitPostListRequest = {
    queryParams: {
      search: debouncedSearchQuery,
      gender,
      celebrityCategory,
    },
  };

  return (
    <OutfitFeed suspenseInfiniteQueryResult={useFetchOutfitPostList(req)} />
  );
}

export default SearchOutfitFeed;
