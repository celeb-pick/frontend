import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import TextField from '../../../../components/atoms/TextField';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';
import CreateOutfitPostProgress from '../CreateOutfitPostProgress';
import CreateOutfitPostTitle from '../CreateOutfitPostTitle';

interface CreateOutfitPostTitleStepProps {
  onClickPrevious: () => void;
  onClickNext: () => void;
}

function CreateOutfitPostTitleStep({
  onClickPrevious,
  onClickNext,
}: CreateOutfitPostTitleStepProps) {
  const { title, trigger, errors } = useCreateOutfitPostPageContext();

  const handleClickNextButton = async () => {
    const isValid = await trigger('title');
    if (!isValid) {
      return;
    }
    onClickNext();
  };

  return (
    <>
      <CreateOutfitPostProgress currentStep={3} />
      <CreateOutfitPostTitle>코디 제목을 입력해 주세요.</CreateOutfitPostTitle>
      <TextField
        value={title.value}
        onChange={title.onChange}
        label="코디 제목"
        css={[tw`max-w-[360px]`]}
      />
      {errors.title && (
        <p css={[tw`text-red-500 mt-2`]}>{errors.title.message}</p>
      )}
      <div css={[tw`flex gap-x-6 w-full mt-24 mb-16`]}>
        <Button fullWidth color="gray" onClick={onClickPrevious}>
          이전으로
        </Button>
        <Button
          fullWidth
          disabled={!title.value}
          onClick={handleClickNextButton}
        >
          다음으로
        </Button>
      </div>
    </>
  );
}

export default CreateOutfitPostTitleStep;
