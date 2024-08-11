import { ComponentPropsWithoutRef, ReactNode } from 'react';
import tw, { css } from 'twin.macro';
import { tailwindColors } from '../../../constants/tailwind';
import Spinner from '../spinner';

interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'color'> {
  /**
   * 버튼 내부에 들어갈 내용 입니다.
   */
  children: ReactNode;

  /**
   * 버튼의 사이즈 입니다.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 버튼의 색상으로 Tailwind Color에 기반하고 있습니다.
   */
  color?: keyof typeof tailwindColors;

  /**
   * 부모 width의 풀사이즈 버튼으로 사용할 수 있습니다.
   */
  fullWidth?: boolean;

  /**
   * mutate의 로딩 상태를 나타내는 작업 등에 사용할 수 있습니다.
   */
  isLoading?: boolean;
}

const colorStyle = (color: ButtonProps['color']) => {
  if (!color) {
    return null;
  }
  return [
    tw`text-white disabled:bg-gray-200 disabled:text-gray-400`,
    css`
      background-color: ${tailwindColors[color][500]};
      &:hover&:not([disabled]) {
        background-color: ${tailwindColors[color][600]};
      }
    `,
  ];
};

const sizeStyle = (size: ButtonProps['size']) => {
  if (!size) {
    return null;
  }
  return {
    large: tw`px-6 py-1.5 text-lg`,
    medium: tw`px-5 py-[7px]`,
    small: tw`px-4 py-[6px] text-sm`,
  }[size];
};

/**
 * 버튼 컴포넌트 입니다.
 */
function Button({
  children,
  size = 'medium',
  color = 'blue',
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      css={[
        tw`flex-center rounded-3xl font-semibold break-all`,
        colorStyle(color),
        sizeStyle(size),
        fullWidth && tw`w-full`,
      ]}
      type="button"
      {...props}
    >
      {isLoading && <Spinner size={size === 'small' ? 14 : 16} tw="mr-1.5" />}
      {children}
    </button>
  );
}

export default Button;
