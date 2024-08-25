import { ChangeEvent, ComponentPropsWithoutRef, useId, useState } from 'react';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import tw from 'twin.macro';
import Button from '../Button';
import ImageUploaderCropper from './ImageUploaderCropper';

interface ImageUploaderProps extends ComponentPropsWithoutRef<'label'> {
  /**
   * 크롭된 이미지 파일 입니다.
   */
  image: File | undefined;
  setImage: (image: File) => void;

  /**
   * 크롭시 필요한 원본 이미지의 미리보기 URL 입니다.
   * 상태 유지가 필요한 경우를 위해 prop으로 상태를 관리하고 있습니다.
   */
  originalImageUrl: string | undefined;
  setOriginalImageUrl: (url: string) => void;

  /**
   * 크롭된 이미지의 미리보기 URL 입니다.
   * 상태 유지가 필요한 경우를 위해 prop으로 상태를 관리하고 있습니다.
   */
  croppedImageUrl: string | undefined;
  setCroppedImageUrl: (url: string) => void;

  /**
   * 업로더의 크기를 나타내는 단위 입니다.
   * 'px' 단위로 값이 적용 됩니다.
   */
  size?: number;
}

/**
 * 이미지를 업로드하고 미리보기 이미지를 확인할 수 있습니다.
 * 이미지를 업로드 하면 크롭 기능을 통해 이미지를 정방형으로 자를 수 있습니다.
 */
function ImageUploader({
  image,
  setImage,
  originalImageUrl,
  setOriginalImageUrl,
  croppedImageUrl,
  setCroppedImageUrl,
  size = 320,
  ...props
}: ImageUploaderProps) {
  const fileInputId = useId();
  const [showCropper, setShowCropper] = useState(false);

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length < 1) {
      return;
    }
    setOriginalImageUrl(URL.createObjectURL(fileList[0]));
    setShowCropper(true);
  };

  return (
    <div css={[tw`flex flex-col items-center`]}>
      <label
        htmlFor={fileInputId}
        css={[
          tw`flex-center flex-col gap-y-4 rounded-lg border-solid border-4 border-gray-300 text-gray-300 cursor-pointer`,
          { width: size, height: size },
        ]}
        {...props}
      >
        <input
          id={fileInputId}
          type="file"
          onChange={handleChangeFile}
          css={[tw`hidden`]}
        />
        {croppedImageUrl ? (
          <img
            src={croppedImageUrl}
            alt="코디 사진"
            css={[tw`w-full h-full rounded-[4px]`]}
          />
        ) : (
          <>
            <AddPhotoAlternateOutlinedIcon css={[tw`text-7xl`]} />
            <span css={[tw`text-2xl font-bold`]}>사진 업로드</span>
          </>
        )}
      </label>
      {!!croppedImageUrl && (
        <Button
          onClick={() => setShowCropper(true)}
          color="indigo"
          css={[tw`mt-3 gap-1`]}
        >
          <FullscreenRoundedIcon fontSize="small" />
          범위 재설정
        </Button>
      )}

      {showCropper && (
        <ImageUploaderCropper
          originalImageUrl={originalImageUrl}
          setCroppedImage={setImage}
          setCroppedImageUrl={setCroppedImageUrl}
          setShowCropper={setShowCropper}
        />
      )}
    </div>
  );
}

export default ImageUploader;
