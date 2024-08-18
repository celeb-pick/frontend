import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import OutfitPostGenderSelect from '../OutfitPostGenderSelect';
import CelebrityCategorySelect from './CelebrityCategorySelect';

interface OutfitFilterProps extends ComponentPropsWithoutRef<'div'> {}

/**
 * `gender`, `celebCategory` query parameter 값을 선택하는 필터 입니다.
 * `OutfitFeed` 컴포넌트와 같이 사용될 수 있습니다.
 */
function OutfitFilter({ ...props }: OutfitFilterProps) {
  return (
    <div
      css={[
        tw`z-10 sticky top-0 flex justify-end gap-x-3 p-2 backdrop-blur-sm`,
      ]}
      {...props}
    >
      <OutfitPostGenderSelect />
      <CelebrityCategorySelect />
    </div>
  );
}

export default OutfitFilter;
