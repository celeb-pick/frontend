import tw from 'twin.macro';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import OutfitItemCategorySelect from '../OutfitItemCategorySelect';

function OutfitItemFilter() {
  const [category, setCategory] = useQueryParam(
    'itemCategory',
    withDefault(StringParam, null)
  );

  return (
    <div
      css={[
        tw`z-10 sticky top-0 flex justify-end gap-x-3 p-2 backdrop-blur-sm`,
      ]}
    >
      <OutfitItemCategorySelect value={category} onChange={setCategory} />
    </div>
  );
}

export default OutfitItemFilter;
