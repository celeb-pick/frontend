import Skeleton from '../../components/atoms/skeleton';
import Grid from '../../components/templates/grid';

function MyScrapGridSkeleton() {
  return (
    <Grid>
      {Array.from({ length: 15 }).map((_, i) => (
        /**
         * Skeleton UI는 index를 key로 사용해도 렌더링 상 문제가 없을 것이라 판단해
         * eslint 에러를 disabled 했습니다.
         */
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={i} height="100%" />
      ))}
    </Grid>
  );
}

export default MyScrapGridSkeleton;
