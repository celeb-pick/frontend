import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import MaterialSymbol from '../material-symbol';

interface AvatarProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * 아바타 이미지의 src 입니다.
   * 값이 없을 경우 기본 아이콘 아바타가 사용 됩니다.
   */
  src?: string;

  /**
   * 아바타 이미지의 대체 텍스트 입니다.
   */
  alt?: string;

  /**
   * 아바타의 크기를 나타내는 단위 입니다.
   * 'px' 단위로 값이 적용 됩니다.
   */
  size?: number;
}

function AvatarImage({ ...props }: ComponentPropsWithoutRef<'img'>) {
  return <img tw="w-full h-full rounded-full" alt="" {...props} />;
}

function AvatarIcon({
  ...props
}: Omit<ComponentPropsWithoutRef<typeof MaterialSymbol>, 'name'>) {
  return (
    <MaterialSymbol
      name="person"
      fill
      wght={200}
      opsz={0}
      tw="text-white"
      {...props}
    />
  );
}

/**
 * 아이콘 아바타와 이미지 아바타로 사용할 수 있는 컴포넌트 입니다.
 */
function Avatar({ src, alt, size = 32, ...props }: AvatarProps) {
  const pxSize = `${size}px`;

  return (
    <div
      css={[
        tw`relative flex-center rounded-full bg-gray-300`,
        { width: pxSize, height: pxSize },
      ]}
      {...props}
    >
      {src ? <AvatarImage src={src} alt={alt} /> : <AvatarIcon size={size} />}
    </div>
  );
}

export default Avatar;
