import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface OutfitFeedFetchTriggerProps {
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

function OutfitFeedFetchTrigger({
  hasNextPage,
  fetchNextPage,
}: OutfitFeedFetchTriggerProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return <div ref={ref} className="h-1" />;
}

export default OutfitFeedFetchTrigger;
