import { Suspense, useState } from 'react';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import ApiErrorBoundary from '../../../../components/errors/ApiErrorBoundary';
import useCreateOutfitPost from '../../../../features/outfits/mutations/useCreateOutfitPost';
import { isEmptyArray } from '../../../../utils/array';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';
import CreateOutfitPostProgress from '../CreateOutfitPostProgress';
import CreateOutfitPostTitle from '../CreateOutfitPostTitle';
import OutfitItemList from './OutfitItemList';
import OutfitItemListSkeleton from './OutfitItemListSkeleton';
import OutfitItemSearchBar from './OutfitItemSearchBar';

interface CreateOutfitPostItemStepProps {
  onClickPrevious: () => void;
}

function CreateOutfitPostItemStep({
  onClickPrevious,
}: CreateOutfitPostItemStepProps) {
  const { itemIds, errors, handleSubmit } = useCreateOutfitPostPageContext();
  const [search, setSearch] = useState<string>();
  const { mutate, isPending } = useCreateOutfitPost();

  const handleClickCreateButton = () => {
    handleSubmit(
      (payload) => {
        mutate({ payload });
      },
      (fieldErrors) => {
        if (!fieldErrors.itemIds) {
          toast.warning('다른 스텝의 입력값을 확인해 주세요.');
        }
      }
    )();
  };

  return (
    <>
      <CreateOutfitPostProgress currentStep={5} />
      <CreateOutfitPostTitle>
        코디 아이템을&nbsp;
        <span css={[tw`text-indigo-700`]}>5개 내로&nbsp;</span>
        선택해 주세요.
      </CreateOutfitPostTitle>
      <OutfitItemSearchBar search={search} setSearch={setSearch} />
      <ApiErrorBoundary>
        <Suspense fallback={<OutfitItemListSkeleton />}>
          <OutfitItemList search={search} />
        </Suspense>
      </ApiErrorBoundary>
      {errors.itemIds && (
        <p css={[tw`text-red-500 mt-2`]}>{errors.itemIds.message}</p>
      )}
      <div css={[tw`flex gap-x-6 w-full mt-24 mb-16`]}>
        <Button fullWidth color="gray" onClick={onClickPrevious}>
          이전으로
        </Button>
        <Button
          fullWidth
          disabled={isEmptyArray(itemIds.value)}
          onClick={handleClickCreateButton}
          isLoading={isPending}
        >
          코디 생성
        </Button>
      </div>
    </>
  );
}

export default CreateOutfitPostItemStep;
