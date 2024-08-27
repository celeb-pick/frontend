import { ComponentPropsWithoutRef } from 'react';
import tw from 'twin.macro';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import CelebrityCategorySelect from '../../../celebrities/components/CelebrityCategorySelect';
import OutfitPostGenderSelect from '../OutfitPostGenderSelect';

interface OutfitFilterProps extends ComponentPropsWithoutRef<'div'> {}

/**
 * `gender`, `celebCategory` query parameter 값을 선택하는 필터 입니다.
 * `OutfitFeed` 컴포넌트와 같이 사용될 수 있습니다.
 */
function OutfitFilter({ ...props }: OutfitFilterProps) {
  const [category, setCategory] = useQueryParam(
    'celebrityCategory',
    withDefault(StringParam, null)
  );

  return (
    <div
      css={[
        tw`z-10 sticky top-0 flex justify-end gap-x-3 p-2 backdrop-blur-sm`,
      ]}
      {...props}
    >
      <OutfitPostGenderSelect />
      <CelebrityCategorySelect value={category} onChange={setCategory} />
    </div>
  );
}

export default OutfitFilter;
