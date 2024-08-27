import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState } from 'react';
import tw from 'twin.macro';
import ImageUploader from '../../../../components/atoms/ImageUploader';

interface CreateCelebrityImageUploaderProps {
  image: File | undefined;
  setImage: (image: File) => void;
}

function CreateCelebrityImageUploader({
  image,
  setImage,
}: CreateCelebrityImageUploaderProps) {
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
      shape="round"
    >
      <div css={[tw`flex-center flex-col gap-y-2 w-full h-full`]}>
        <PersonOutlineOutlinedIcon css={[tw`text-6xl`]} />
        <span css={[tw`text-xl font-bold`]}>사진 업로드</span>
      </div>
    </ImageUploader>
  );
}

export default CreateCelebrityImageUploader;
