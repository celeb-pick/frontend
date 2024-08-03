import { useEffect, type RefObject } from 'react';

/**
 * `targetRef`의 바깥 범위를 클릭하면 handler가 실행 되는 함수 입니다.
 * @param targetRef 타겟의 Ref 입니다.
 * @param handler 바깥 범위를 클릭하면 실행되는 handler 함수 입니다.
 * 의존성 배열에 포함되어 있어 함수를 `useCallback`으로 래핑하여 전달 해주어야 합니다.
 */
const useClickOutside = <T extends HTMLElement>(
  targetRef: RefObject<T>,
  handler: (event: MouseEvent) => void
) => {
  useEffect(() => {
    if (!targetRef.current) {
      return undefined;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        !targetRef.current ||
        targetRef.current!.contains(event.target as Node)
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [targetRef, handler]);
};

export default useClickOutside;
