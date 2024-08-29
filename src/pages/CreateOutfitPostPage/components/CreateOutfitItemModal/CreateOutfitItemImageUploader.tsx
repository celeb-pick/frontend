import CheckroomTwoToneIcon from '@mui/icons-material/CheckroomTwoTone';
import { useState } from 'react';
import tw from 'twin.macro';
import ImageUploader from '../../../../components/atoms/ImageUploader';

interface CreateOutfitItemImageUploaderProps {
  image: File | undefined;
  setImage: (image: File) => void;
}

function CreateOutfitItemImageUploader({
  image,
  setImage,
}: CreateOutfitItemImageUploaderProps) {
  const [originalImageUrl, setOriginalImageUrl] = useState<string>();
  const [croppedImageUrl, setCroppedImageUrl] = useState<string>();

  return (
    <ImageUploader
      image={image}
      setImage={setImage}
      originalImageUrl={originalImageUrl}
      setOriginalImageUrl={setOriginalImageUrl}
      croppedImageUrl={croppedImageUrl}
      setCroppedImageUrl={setCroppedImageUrl}
      size={180}
    >
      <div css={[tw`flex-center flex-col gap-y-2 w-full h-full`]}>
        <CheckroomTwoToneIcon css={[tw`text-4xl`]} />
        <span css={[tw`text-xl font-bold`]}>사진 업로드</span>
      </div>
    </ImageUploader>
  );
}

export default CreateOutfitItemImageUploader;
