import { useEffect } from 'react';
import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import TextField from '../../../../components/atoms/TextField';
import Modal from '../../../../components/organisms/Modal';
import CelebrityCategorySelect from '../../../../features/celebrities/components/CelebrityCategorySelect';
import useCreateCelebrity from '../../../../features/celebrities/mutations/useCreateCelebrity';
import CreateCelebrityImageUploader from './CreateCelebrityImageUploader';
import useCreateCelebrityForm from './useCreateCelebrityForm';

interface CreateCelebrityModalProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}

function CreateCelebrityModal({
  isShow,
  setIsShow,
}: CreateCelebrityModalProps) {
  const { mutate, isPending, isSuccess } = useCreateCelebrity();
  const { name, category, profileImage, errors, handleSubmit } =
    useCreateCelebrityForm();
  const hasEmptyField = !name.value || !category.value || !profileImage.value;

  useEffect(() => {
    if (isSuccess) {
      setIsShow(false);
    }
  }, [isSuccess, setIsShow]);

  return (
    <Modal isShow={isShow} setIsShow={setIsShow} title="셀럽 추가">
      <div css={[tw`flex flex-col items-center gap-y-6`]}>
        <div>
          <CreateCelebrityImageUploader
            image={profileImage.value}
            setImage={profileImage.onChange}
          />
          {errors.profileImage && (
            <p css={[tw`mt-3 ml-1 text-red-500 text-sm`]}>
              {errors.profileImage?.message}
            </p>
          )}
        </div>
        <TextField
          value={name.value}
          onChange={name.onChange}
          label="이름"
          maxLength={20}
          errorMessages={[errors.name?.message]}
        />
        <CelebrityCategorySelect
          value={category.value}
          onChange={category.onChange}
          placeholder="분야 선택"
          required
          css={[tw`w-full`]}
        />
        <Button
          fullWidth
          onClick={handleSubmit((payload) => mutate({ payload }))}
          disabled={hasEmptyField}
          isLoading={isPending}
          css={[tw`mt-8`]}
        >
          셀럽 추가
        </Button>
      </div>
    </Modal>
  );
}

export default CreateCelebrityModal;
