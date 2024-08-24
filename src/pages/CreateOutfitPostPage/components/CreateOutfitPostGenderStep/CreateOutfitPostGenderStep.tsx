import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';
import CreateOutfitPostProgress from '../CreateOutfitPostProgress';
import CreateOutfitPostTitle from '../CreateOutfitPostTitle';
import OutfitPostGenderRadioGroup from './OutfitPostGenderRadioGroup';

function CreateOutfitPostGenderStep() {
  const { Funnel, setStep, gender } = useCreateOutfitPostPageContext();

  return (
    <Funnel.Step name="gender">
      <CreateOutfitPostProgress stepNumber={2} />
      <CreateOutfitPostTitle>
        코디에 맞는 성별을
        <br /> 선택해 주세요.
      </CreateOutfitPostTitle>
      <OutfitPostGenderRadioGroup
        value={gender.value}
        onChange={gender.onChange}
      />
      <div css={[tw`sticky bottom-0 flex gap-x-6 w-full mt-auto`]}>
        <Button fullWidth color="gray" onClick={() => setStep('celebrity')}>
          이전으로
        </Button>
        <Button
          fullWidth
          disabled={!gender.value}
          onClick={() => setStep('outfitPostImage')}
        >
          다음으로
        </Button>
      </div>
    </Funnel.Step>
  );
}

export default CreateOutfitPostGenderStep;
