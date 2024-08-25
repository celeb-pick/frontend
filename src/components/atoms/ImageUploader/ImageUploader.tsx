import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useId,
  useState,
} from 'react';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import tw from 'twin.macro';
import Button from '../Button';
import ImageUploaderCropper from './ImageUploaderCropper';

interface ImageUploaderProps extends ComponentPropsWithoutRef<'label'> {
  image: File | undefined;
  onChange: () => void;
  size?: number;
}

function ImageUploader({
  image,
  onChange,
  size = 320,
  ...props
}: ImageUploaderProps) {
  const fileInputId = useId();

  const [originalImageUrl, setOriginalImageUrl] = useState<string>();
  const [croppedImageUrl, setCroppedImageUrl] = useState<string>();
  const [showCropper, setShowCropper] = useState(false);

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length < 1) {
      return;
    }
    setOriginalImageUrl(URL.createObjectURL(fileList[0]));
    setShowCropper(true);
  };

  useEffect(() => {
    if (!image || !!croppedImageUrl) {
      return;
    }
    setCroppedImageUrl(URL.createObjectURL(image));
  }, [image, croppedImageUrl]);

  return (
    <>
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
          setCroppedImage={onChange}
          setCroppedImageUrl={setCroppedImageUrl}
          setShowCropper={setShowCropper}
        />
      )}
    </>
  );
}

export default ImageUploader;
