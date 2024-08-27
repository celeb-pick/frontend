import tw from 'twin.macro';
import Select from '../../../../components/molecules/Select';
import { SelectOptionsType } from '../../../../components/molecules/Select/types';
import { OutfitItemCategory } from '../../../../types/outfit';

interface OutfitItemCategorySelectProps {
  value: string | null | undefined;
  onChange: (value: string | null | undefined) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

function OutfitItemCategorySelect({
  value,
  onChange,
  required,
  placeholder = '카테고리',
  className,
}: OutfitItemCategorySelectProps) {
  const options: SelectOptionsType<OutfitItemCategory> = [
    { value: '상의' },
    { value: '하의' },
    { value: '아우터' },
    { value: '신발' },
    { value: '가방' },
    { value: '악세사리' },
    { value: '기타' },
  ];

  if (!required) {
    options.unshift({ value: null, label: '전체' });
  }

  return (
    <Select
      value={value}
      onChangeValue={onChange}
      options={options}
      placeholder={placeholder}
      css={[tw`min-w-[100px] w-[100px]`]}
      className={className}
    />
  );
}

export default OutfitItemCategorySelect;
