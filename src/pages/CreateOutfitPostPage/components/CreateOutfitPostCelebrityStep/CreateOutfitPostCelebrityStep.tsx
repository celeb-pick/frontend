import { Suspense, useState } from 'react';
import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import LocalApiErrorBoundary from '../../../../components/errors/LocalApiErrorBoundary';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';
import CreateOutfitPostProgress from '../CreateOutfitPostProgress';
import CreateOutfitPostTitle from '../CreateOutfitPostTitle';
import CelebrityList from './CelebrityList';
import CelebrityListSkeleton from './CelebrityListSkeleton';
import CelebritySearchBar from './CelebritySearchBar';

interface CreateOutfitPostCelebrityStepProps {
  onClickNext: () => void;
}

function CreateOutfitPostCelebrityStep({
  onClickNext,
}: CreateOutfitPostCelebrityStepProps) {
  const { celebrityId, errors } = useCreateOutfitPostPageContext();
  const [search, setSearch] = useState<string>();

  return (
    <>
      <CreateOutfitPostProgress currentStep={1} />
      <CreateOutfitPostTitle>
        코디에 맞는 셀럽을
        <br /> 선택해 주세요.
      </CreateOutfitPostTitle>
      <CelebritySearchBar search={search} setSearch={setSearch} />
      <LocalApiErrorBoundary>
        <Suspense fallback={<CelebrityListSkeleton />}>
          <CelebrityList search={search} />
        </Suspense>
      </LocalApiErrorBoundary>
      {errors.celebrityId && (
        <p css={[tw`text-red-500 mt-2`]}>{errors.celebrityId.message}</p>
      )}
      <Button
        fullWidth
        disabled={!celebrityId.value}
        onClick={onClickNext}
        css={[tw`mt-24 mb-16`]}
      >
        다음으로
      </Button>
    </>
  );
}

export default CreateOutfitPostCelebrityStep;
