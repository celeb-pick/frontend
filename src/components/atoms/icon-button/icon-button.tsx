import { ComponentPropsWithoutRef, ReactNode } from 'react';
import tw from 'twin.macro';

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Material Icon, 일반 Element 등을 아이콘으로 사용할 수 있습니다.
   */
  icon: ReactNode;
}

/**
 * `icon`을 prop으로 받아 아이콘 버튼으로 보여주는 컴포넌트 입니다.
 * 아이콘에는 Material Icon의 컴포넌트를 주로 사용할 수 있습니다.
 */
function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      css={[tw`flex-center p-2 hover:opacity-50 rounded-3xl`]}
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;
