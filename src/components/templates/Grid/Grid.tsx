import { ReactNode } from 'react';
import tw from 'twin.macro';

interface GridProps {
  /**
   * Grid의 열의 갯수 입니다.
   */
  col?: number;

  /**
   * Grid Cell에 해당 됩니다.
   */
  children: ReactNode;
}

/**
 * Grid Cell이 정사각형으로 나타나는 그리드 컨테이너 컴포넌트 입니다.
 *
 * @example
 *
 * ```tsx
 * // 결과
 * // ■ ■ ■
 * // ■ □ □
 *
 * <Grid>
 *   <div>■</div>
 *   <div>■</div>
 *   <div>■</div>
 *   <div>■</div>
 * </Grid>
 * ```
 */
function Grid({ col = 3, children }: GridProps) {
  return (
    <div
      css={[
        tw`grid gap-1 p-1 [>*]:aspect-square`,
        { gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))` },
      ]}
    >
      {children}
    </div>
  );
}

export default Grid;
