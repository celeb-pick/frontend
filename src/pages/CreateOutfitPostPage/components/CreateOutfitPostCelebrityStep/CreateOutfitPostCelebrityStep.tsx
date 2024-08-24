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

function CreateOutfitPostCelebrityStep() {
  const { Funnel, setStep, celebrityId } = useCreateOutfitPostPageContext();
  const [search, setSearch] = useState<string>();

  return (
    <Funnel.Step name="celebrity">
      <div css={[tw`flex flex-col items-center px-4`]}>
        <CreateOutfitPostProgress stepNumber={1} />
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
        <Button
          disabled={!celebrityId.value}
          onClick={() => setStep('gender')}
          css={[tw`mt-20 w-1/2`]}
        >
          다음으로
        </Button>
      </div>
    </Funnel.Step>
  );
}

export default CreateOutfitPostCelebrityStep;
