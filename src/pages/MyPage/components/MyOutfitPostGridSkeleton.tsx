import Skeleton from '../../../components/atoms/Skeleton';
import Grid from '../../../components/templates/Grid';

function MyOutfitPostGridSkeleton() {
  return (
    <Grid>
      {Array.from({ length: 15 }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={i} height="100%" />
      ))}
    </Grid>
  );
}

export default MyOutfitPostGridSkeleton;
