import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';

interface SkeletonProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * 스켈레톤의 가로 길이 입니다.
   */
  width?: string | number;

  /**
   * 스켈레톤의 세로 길이 입니다.
   */
  height?: string | number;

  /**
   * 직사각형 혹은 원형을 선택할 수 있습니다.
   */
  variant?: 'rectangular' | 'circular';
}

/**
 * 데이터가 로딩될 때 스켈레톤 UI를 표현하기 위해 사용되는 컴포넌트 입니다.
 */
function Skeleton({
  width = '100%',
  height = 16,
  variant = 'rectangular',
  ...props
}: SkeletonProps) {
  return (
    <div
      css={[
        tw`inline-block bg-gray-200`,
        variant === 'circular' ? tw`rounded-full` : tw`rounded-sm`,
        {
          width,
          height,
        },
      ]}
      {...props}
    />
  );
}

export default Skeleton;
