import { css, keyframes } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import SpinnerIcon from './spinner-icon';

interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * 스피너의 크기를 나타내는 단위 입니다.
   * 'px' 단위로 값이 적용 됩니다.
   */
  size?: number;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animationStyle = css`
  animation: ${spin} 1s linear infinite;
`;

/**
 * 로딩 상태를 나타낼 때 사용되는 컴포넌트 입니다.
 */
function Spinner({ size = 24, ...props }: SpinnerProps) {
  return (
    <div css={[tw`overflow-hidden flex-center`]} {...props}>
      <SpinnerIcon width={size} height={size} css={[animationStyle]} />
    </div>
  );
}

export default Spinner;
