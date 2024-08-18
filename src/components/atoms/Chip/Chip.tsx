import { ComponentPropsWithoutRef } from 'react';
import tw, { css } from 'twin.macro';
import { tailwindColors } from '../../../constants/tailwind';

interface ChipProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * 칩에 나타낼 텍스트 데이터 입니다.
   */
  label: string;

  /**
   * 칩의 형태로 `outlined`는 border 스타일의 칩을,
   * `filled`는 background-color가 채워진 스타일의 칩의 형태를 나타냅니다.
   */
  variant?: 'outlined' | 'filled';

  /**
   * 칩의 색상으로 Tailwind Color에 기반하고 있습니다.
   */
  color?: keyof typeof tailwindColors;
}

const outlineStyle = (color: ChipProps['color']) => {
  if (!color) {
    return null;
  }
  return css`
    color: ${tailwindColors[color]['500']};
    border: solid 1px ${tailwindColors[color]['400']};
  `;
};

const fillStyle = (color: ChipProps['color']) => {
  if (!color) {
    return null;
  }
  return css`
    color: ${tailwindColors[color]['600']};
    background-color: ${tailwindColors[color]['100']};
  `;
};

/**
 * 데이터를 칩의 형태로 나타내는 컴포넌트 입니다.
 */
function Chip({
  label,
  variant = 'outlined',
  color = 'gray',
  ...props
}: ChipProps) {
  const variantStyle =
    variant === 'filled' ? fillStyle(color) : outlineStyle(color);

  return (
    <div css={[tw`px-2.5 py-0.5 w-fit rounded-3xl`, variantStyle]} {...props}>
      <span tw="text-sm font-semibold whitespace-nowrap">{label}</span>
    </div>
  );
}

export default Chip;
