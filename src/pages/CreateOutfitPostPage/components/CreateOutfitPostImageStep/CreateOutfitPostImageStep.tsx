import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import ImageUploader from '../../../../components/atoms/ImageUploader';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';
import CreateOutfitPostProgress from '../CreateOutfitPostProgress';
import CreateOutfitPostTitle from '../CreateOutfitPostTitle';

interface CreateOutfitPostImageStepProps {
  onClickPrevious: () => void;
  onClickNext: () => void;
}

function CreateOutfitPostImageStep({
  onClickPrevious,
  onClickNext,
}: CreateOutfitPostImageStepProps) {
  const {
    image,
    trigger,
    errors,
    originalImageUrl,
    setOriginalImageUrl,
    croppedImageUrl,
    setCroppedImageUrl,
  } = useCreateOutfitPostPageContext();

  const handleClickNextButton = async () => {
    const isValid = await trigger('image');
    if (!isValid) {
      return;
    }
    onClickNext();
  };

  return (
    <>
      <CreateOutfitPostProgress stepNumber={4} />
      <CreateOutfitPostTitle>코디 사진을 선택해 주세요.</CreateOutfitPostTitle>
      <ImageUploader
        image={image.value}
        setImage={image.onChange}
        originalImageUrl={originalImageUrl}
        setOriginalImageUrl={setOriginalImageUrl}
        croppedImageUrl={croppedImageUrl}
        setCroppedImageUrl={setCroppedImageUrl}
      />
      {errors.image && (
        <p css={[tw`text-red-500 mt-2`]}>{errors.image.message}</p>
      )}
      <div css={[tw`sticky bottom-0 flex gap-x-6 w-full mt-auto`]}>
        <Button fullWidth color="gray" onClick={onClickPrevious}>
          이전으로
        </Button>
        <Button
          fullWidth
          disabled={!image.value}
          onClick={handleClickNextButton}
        >
          다음으로
        </Button>
      </div>
    </>
  );
}

export default CreateOutfitPostImageStep;
