import tw from 'twin.macro';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import Select from '../../../../components/molecules/Select';
import { SelectOptionsType } from '../../../../components/molecules/Select/types';
import { CelebrityCategory } from '../../../../types/celebrity';

function CelebrityCategorySelect() {
  const [query, setQuery] = useQueryParam(
    'celebrityCategory',
    withDefault(StringParam, null)
  );

  const options: SelectOptionsType<CelebrityCategory> = [
    { value: null, label: '전체' },
    { value: '아이돌' },
    { value: '가수' },
    { value: '배우' },
    { value: '모델' },
    { value: '인플루언서' },
    { value: '기타' },
  ];

  return (
    <Select
      value={query}
      onChangeValue={setQuery}
      options={options}
      placeholder="분류"
      css={[tw`min-w-[104px] w-[104px]`]}
    />
  );
}

export default CelebrityCategorySelect;
