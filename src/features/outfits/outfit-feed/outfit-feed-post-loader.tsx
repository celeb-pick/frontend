import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import Spinner from '../../../components/atoms/spinner';

interface OutfitFeedPostLoaderProps extends ComponentPropsWithoutRef<'div'> {
  isFetching: boolean;
}

function OutfitFeedPostLoader({
  isFetching,
  ...props
}: OutfitFeedPostLoaderProps) {
  if (!isFetching) {
    return null;
  }

  return (
    <div {...props}>
      <Spinner size={50} css={[tw`h-28`]} />
    </div>
  );
}

export default OutfitFeedPostLoader;
