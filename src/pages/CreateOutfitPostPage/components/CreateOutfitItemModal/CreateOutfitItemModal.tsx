import { useEffect } from 'react';
import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import TextField from '../../../../components/atoms/TextField';
import Modal from '../../../../components/organisms/Modal';
import OutfitItemCategorySelect from '../../../../features/outfits/components/OutfitItemCategorySelect';
import useCreateOutfitItem from '../../../../features/outfits/mutations/useCreateOutfitItem';
import CreateOutfitItemImageUploader from './CreateOutfitItemImageUploader';
import useCreateOutfitItemForm from './useCreateOutfitItemForm';

interface CreateOutfitItemModalProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}

function CreateOutfitItemModal({
  isShow,
  setIsShow,
}: CreateOutfitItemModalProps) {
  const { mutate, isPending, isSuccess } = useCreateOutfitItem();
  const {
    name,
    category,
    brandName,
    purchaseLink,
    image,
    errors,
    reset: resetFormValues,
    handleSubmit,
  } = useCreateOutfitItemForm();
  const hasEmptyField =
    !name.value || !category.value || !brandName.value || !image.value;

  useEffect(() => {
    if (isSuccess) {
      setIsShow(false);
      resetFormValues();
    }
  }, [isSuccess, setIsShow, resetFormValues]);

  return (
    <Modal isShow={isShow} setIsShow={setIsShow} title="코디 아이템 추가">
      <div css={[tw`flex flex-col items-center gap-y-6`]}>
        <div>
          <CreateOutfitItemImageUploader
            image={image.value}
            setImage={image.onChange}
          />
          {errors.image && (
            <p css={[tw`mt-3 ml-1 text-red-500 text-sm`]}>
              {errors.image?.message}
            </p>
          )}
        </div>
        <TextField
          value={name.value}
          onChange={name.onChange}
          label="이름"
          maxLength={40}
          errorMessages={[errors.name?.message]}
        />
        <OutfitItemCategorySelect
          value={category.value}
          onChange={category.onChange}
          required
          css={[tw`w-full`]}
        />
        <TextField
          value={brandName.value}
          onChange={brandName.onChange}
          label="브랜드명"
          maxLength={20}
          errorMessages={[errors.brandName?.message]}
        />
        <TextField
          value={purchaseLink.value}
          onChange={purchaseLink.onChange}
          label="구매링크(선택)"
          maxLength={300}
          errorMessages={[errors.purchaseLink?.message]}
        />
        <Button
          fullWidth
          onClick={handleSubmit((payload) => mutate({ payload }))}
          disabled={hasEmptyField}
          isLoading={isPending}
          css={[tw`mt-8`]}
        >
          코디 아이템 추가
        </Button>
      </div>
    </Modal>
  );
}

export default CreateOutfitItemModal;
