import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Cropper, { Area, CropperProps, Point } from 'react-easy-crop';
import tw from 'twin.macro';
import { blobToFile } from '../../../utils/file';
import IconButton from '../IconButton';
import getCroppedImg from './helpers';

interface ImageUploaderCropperProps {
  originalImageUrl: string | undefined;
  setCroppedImageUrl: (url: string) => void;
  setCroppedImage: (image: File) => void;
  setShowCropper: (isShow: boolean) => void;
  cropShape: CropperProps['cropShape'];
}

function ImageUploaderCropper({
  originalImageUrl,
  setCroppedImageUrl,
  setCroppedImage,
  setShowCropper,
  cropShape,
}: ImageUploaderCropperProps) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();

  const onCropComplete = (_: Area, areaPixels: Area) => {
    setCroppedAreaPixels(areaPixels);
  };

  const handleClickSaveButton = async () => {
    if (!originalImageUrl || !croppedAreaPixels) {
      return;
    }

    const image = await getCroppedImg(originalImageUrl, croppedAreaPixels);

    if (!image) {
      throw Error('이미지 Crop 도중 오류가 발생 했습니다.');
    }

    setCroppedImage(blobToFile(image));
    setCroppedImageUrl(URL.createObjectURL(image));
    setShowCropper(false);
  };

  return createPortal(
    <div css={[tw`z-50 fixed top-0 left-0 w-full h-full`]}>
      <Cropper
        image={originalImageUrl}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropShape={cropShape}
      />
      <div
        css={[
          tw`fixed bottom-0 left-0 flex-y-center justify-between gap-2 w-full p-2 pl-10 bg-white select-none touch-none`,
        ]}
      >
        <input
          type="range"
          value={zoom}
          min="1"
          max="3"
          step="0.1"
          onChange={(e) => setZoom(Number(e.target.value))}
          css={[tw`flex-1`]}
        />
        <IconButton
          icon={<CheckRoundedIcon />}
          onClick={handleClickSaveButton}
          disabled={!originalImageUrl || !croppedAreaPixels}
        />
      </div>
    </div>,
    document.body
  );
}

export default ImageUploaderCropper;
