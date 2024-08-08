import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import CelebrityCategorySelect from './celebrity-category-select';
import GenderSelect from './gender-select';

interface OutfitFilterProps extends ComponentPropsWithoutRef<'div'> {}

function OutfitFilter({ ...props }: OutfitFilterProps) {
  return (
    <div
      css={[tw`z-10 sticky top-0 flex justify-end gap-x-3 p-2 bg-white`]}
      {...props}
    >
      <GenderSelect />
      <CelebrityCategorySelect />
    </div>
  );
}

export default OutfitFilter;
