import tw from 'twin.macro';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import Select from '../../../../components/molecules/Select';
import { SelectOptionsType } from '../../../../components/molecules/Select/types';
import { OutfitItemCategory } from '../../../../types/outfit';

function OutfitItemCategorySelect() {
  const [query, setQuery] = useQueryParam(
    'itemCategory',
    withDefault(StringParam, null)
  );

  const options: SelectOptionsType<OutfitItemCategory> = [
    { value: null, label: '전체' },
    { value: '상의' },
    { value: '하의' },
    { value: '아우터' },
    { value: '신발' },
    { value: '가방' },
    { value: '악세사리' },
    { value: '기타' },
  ];

  return (
    <Select
      value={query}
      onChangeValue={setQuery}
      options={options}
      placeholder="카테고리"
      css={[tw`min-w-[100px] w-[100px]`]}
    />
  );
}

export default OutfitItemCategorySelect;
