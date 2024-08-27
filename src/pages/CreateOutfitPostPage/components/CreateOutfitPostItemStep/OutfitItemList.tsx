import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import tw from 'twin.macro';
import { useDebounce } from 'use-debounce';
import Button from '../../../../components/atoms/Button';
import MoreButton from '../../../../components/atoms/MoreButton';
import Spinner from '../../../../components/atoms/Spinner';
import useFetchOutfitItemList from '../../../../features/outfits/queries/useFetchOutfitItemList';
import {
  OutfitItemCategory,
  OutfitItemListRequest,
} from '../../../../types/outfit';
import CreateOutfitItemModal from '../CreateOutfitItemModal/CreateOutfitItemModal';
import OutfitItemListContent from './OutfitItemListContent';

interface OutfitItemListProps {
  search: string | undefined;
}

function OutfitItemList({ search }: OutfitItemListProps) {
  const [isShowCreateModal, setIsShowCreateModal] = useState(false);

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
      <Button onClick={() => setIsShowCreateModal(true)} css={[tw`mt-10`]}>
        <AddRoundedIcon />
        <span>코디 아이템 직접 추가하기</span>
      </Button>
      {hasNextPage && (
        <MoreButton
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          css={[tw`w-60 mt-10`]}
        />
      )}
      <CreateOutfitItemModal
        isShow={isShowCreateModal}
        setIsShow={setIsShowCreateModal}
      />
    </div>
  );
}

export default OutfitItemList;
