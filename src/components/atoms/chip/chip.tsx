import { ComponentPropsWithoutRef } from 'react';
import tw, { css } from 'twin.macro';
import { tailwindColors } from '../../../constants/tailwind';

interface ChipProps extends ComponentPropsWithoutRef<'div'> {
  label: string;
  variant?: 'outlined' | 'filled';
  color?: keyof typeof tailwindColors;
}

const outlineStyle = (color: ChipProps['color']) => {
  if (!color) {
    return null;
  }
  return css`
    color: ${tailwindColors[color]['400']};
    border-color: ${tailwindColors[color]['300']};
  `;
};

const fillStyle = (color: ChipProps['color']) => {
  if (!color) {
    return null;
  }
  return css`
    background-color: ${tailwindColors[color]['400']};
    color: white;
  `;
};

function Chip({
  label,
  variant = 'outlined',
  color = 'gray',
  ...props
}: ChipProps) {
  const variantStyle =
    variant === 'filled' ? fillStyle(color) : outlineStyle(color);

  return (
    <div
      css={[
        tw`px-3 py-0.5 border-solid border w-fit rounded-3xl`,
        variantStyle,
      ]}
      {...props}
    >
      <span tw="text-sm font-medium">{label}</span>
    </div>
  );
}

export default Chip;
