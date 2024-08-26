import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';
import CreateOutfitPostProgress from '../CreateOutfitPostProgress';
import CreateOutfitPostTitle from '../CreateOutfitPostTitle';
import OutfitPostGenderRadioGroup from './OutfitPostGenderRadioGroup';

interface CreateOutfitPostGenderStepProps {
  onClickPrevious: () => void;
  onClickNext: () => void;
}

function CreateOutfitPostGenderStep({
  onClickPrevious,
  onClickNext,
}: CreateOutfitPostGenderStepProps) {
  const { gender, errors } = useCreateOutfitPostPageContext();

  return (
    <>
      <CreateOutfitPostProgress currentStep={2} />
      <CreateOutfitPostTitle>
        코디에 맞는 성별을
        <br /> 선택해 주세요.
      </CreateOutfitPostTitle>
      <OutfitPostGenderRadioGroup
        value={gender.value}
        onChange={gender.onChange}
      />
      {errors.gender && (
        <p css={[tw`text-red-500 mt-2`]}>{errors.gender.message}</p>
      )}
      <div css={[tw`flex gap-x-6 w-full mt-24 mb-16`]}>
        <Button fullWidth color="gray" onClick={onClickPrevious}>
          이전으로
        </Button>
        <Button fullWidth disabled={!gender.value} onClick={onClickNext}>
          다음으로
        </Button>
      </div>
    </>
  );
}

export default CreateOutfitPostGenderStep;
