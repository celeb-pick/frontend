import { useSearchParams } from 'react-router-dom';
import tw from 'twin.macro';
import { useDebounce } from 'use-debounce';
import MoreButton from '../../../../components/atoms/MoreButton';
import Spinner from '../../../../components/atoms/Spinner';
import useFetchOutfitItemList from '../../../../features/outfits/queries/useFetchOutfitItemList';
import {
  OutfitItemCategory,
  OutfitItemListRequest,
} from '../../../../types/outfit';
import OutfitItemListContent from './OutfitItemListContent';

interface OutfitItemListProps {
  search: string | undefined;
}

function OutfitItemList({ search }: OutfitItemListProps) {
  const [searchParams] = useSearchParams();
  const itemCategory = searchParams.get('itemCategory') as OutfitItemCategory;

  const [debouncedSearch] = useDebounce(search, 300);

  const req: OutfitItemListRequest = {
    queryParams: {
      itemCategory,
      search: debouncedSearch,
    },
  };

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchOutfitItemList(req);
  return (
    <div css={[tw`flex flex-col items-center w-full`]}>
      <OutfitItemListContent pagesData={data.pages} />
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

export default OutfitItemList;
