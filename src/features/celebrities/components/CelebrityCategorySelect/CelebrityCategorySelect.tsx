import tw from 'twin.macro';
import Select from '../../../../components/molecules/Select';
import { SelectOptionsType } from '../../../../components/molecules/Select/types';
import { CelebrityCategory } from '../../../../types/celebrity';

interface CelebrityCategorySelectProps {
  value: string | null | undefined;
  onChange: (value: string | null | undefined) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

function CelebrityCategorySelect({
  value,
  onChange,
  required,
  placeholder = '분류',
  className,
}: CelebrityCategorySelectProps) {
  const options: SelectOptionsType<CelebrityCategory> = [
    { value: '아이돌' },
    { value: '가수' },
    { value: '배우' },
    { value: '모델' },
    { value: '인플루언서' },
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
      css={[tw`min-w-[104px] w-[104px]`]}
      className={className}
    />
  );
}

export default CelebrityCategorySelect;
