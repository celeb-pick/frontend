import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteScrollFetchTriggerProps {
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

/**
 * 해당 컴포넌트가 화면상에 보였을 때 `hasNextPage`일 경우
 * `fetchNextPage` 함수를 호출하는 트리거 컴포넌트 입니다.
 */
function InfiniteScrollFetchTrigger({
  hasNextPage,
  fetchNextPage,
}: InfiniteScrollFetchTriggerProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return <div ref={ref} className="h-1" />;
}

export default InfiniteScrollFetchTrigger;
