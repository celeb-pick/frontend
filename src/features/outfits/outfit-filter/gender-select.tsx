import tw from 'twin.macro';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import Select from '../../../components/molecules/select';
import { SelectOptionsType } from '../../../components/molecules/select/types';
import { OutfitPostGender } from '../../../types/outfit';

function GenderSelect() {
  const [query, setQuery] = useQueryParam(
    'gender',
    withDefault(StringParam, null)
  );

  const options: SelectOptionsType<OutfitPostGender> = [
    { value: null, label: '전체' },
    { value: '남성' },
    { value: '여성' },
  ];

  return (
    <Select
      value={query}
      onChangeValue={setQuery}
      options={options}
      placeholder="성별"
      css={[tw`min-w-[70px]`]}
    />
  );
}

export default GenderSelect;
