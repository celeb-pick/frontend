import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import Spinner from '../../../../components/atoms/Spinner';

interface SearchOutfitItemListLoaderProps
  extends ComponentPropsWithoutRef<'div'> {
  isFetching: boolean;
}

function SearchOutfitItemListLoader({
  isFetching,
  ...props
}: SearchOutfitItemListLoaderProps) {
  if (!isFetching) {
    return null;
  }

  return (
    <div {...props}>
      <Spinner size={50} css={[tw`h-28`]} />
    </div>
  );
}

export default SearchOutfitItemListLoader;
