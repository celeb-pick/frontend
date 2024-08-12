import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';

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

/**
 * 아이콘 아바타와 이미지 아바타로 사용할 수 있는 컴포넌트 입니다.
 */
function Avatar({ src, alt, size = 32, ...props }: AvatarProps) {
  const iconSize = Math.max(size - 8, 0);

  return (
    <div
      css={[
        tw`relative flex-center rounded-full bg-gray-300`,
        { width: size, height: size },
      ]}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} tw="w-full h-full rounded-full" />
      ) : (
        <PersonRoundedIcon css={[tw`text-white`, { fontSize: iconSize }]} />
      )}
    </div>
  );
}

export default Avatar;
