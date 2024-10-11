import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import tw from 'twin.macro';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import IconButton from '../../../components/atoms/IconButton';
import TextField from '../../../components/atoms/TextField';
import Select from '../../../components/molecules/Select';
import { SelectOptionsType } from '../../../components/molecules/Select/types';
import { SearchOption } from '../types';
import useSearchOptionParam from '../useSearchOptionParam';

function SearchAppBar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useQueryParam(
    'query',
    withDefault(StringParam, undefined)
  );

  const [searchOption, setSearchOption] = useSearchOptionParam();

  const options: SelectOptionsType<SearchOption> = [
    { value: '코디' },
    { value: '아이템' },
  ];

  useEffect(() => {
    if (searchOption === '아이템') {
      searchParams.delete('gender');
      searchParams.delete('celebrityCategory');
      setSearchParams(searchParams);
      return;
    }
    if (searchOption === '코디') {
      searchParams.delete('itemCategory');
      setSearchParams(searchParams);
    }
  }, [searchOption, searchParams, setSearchParams]);

  return (
    <div
      className="custom-app-bar-container"
      css={[tw`sticky top-0 flex gap-2 h-20`]}
    >
      <IconButton
        icon={<ArrowBackIosNewRoundedIcon />}
        onClick={() => navigate('/')}
      />
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        label="검색"
      />
      <Select
        value={searchOption}
        onChangeValue={(value) => setSearchOption(value as SearchOption)}
        options={options}
        css={[tw`min-w-[80px]`]}
      />
    </div>
  );
}

export default SearchAppBar;
