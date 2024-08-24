import { useSearchParams } from 'react-router-dom';
import tw from 'twin.macro';
import { useDebounce } from 'use-debounce';
import MoreButton from '../../../../components/atoms/MoreButton';
import Spinner from '../../../../components/atoms/Spinner';
import useFetchCelebrityList from '../../../../features/celebrities/queries/useFetchCelebrityList';
import { CelebrityCategory } from '../../../../types/celebrity';
import { OutfitPostListRequest } from '../../../../types/outfit';
import CelebrityListContent from './CelebrityListContent';

interface CelebrityListProps {
  search: string | undefined;
}

function CelebrityList({ search }: CelebrityListProps) {
  const [searchParams] = useSearchParams();
  const celebrityCategory = searchParams.get(
    'celebrityCategory'
  ) as CelebrityCategory;

  const [debouncedSearch] = useDebounce(search, 300);

  const req: OutfitPostListRequest = {
    queryParams: {
      celebrityCategory,
      search: debouncedSearch,
    },
  };

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchCelebrityList(req);

  return (
    <div css={[tw`flex flex-col items-center w-full max-w-[420px]`]}>
      <CelebrityListContent pagesData={data.pages} />
      {isFetchingNextPage && <Spinner size={30} css={tw`py-4`} />}
      {hasNextPage && (
        <MoreButton
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          css={[tw`w-60 mt-10`]}
        />
      )}
    </div>
  );
}

export default CelebrityList;
