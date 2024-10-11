import { createEnumParam, useQueryParam, withDefault } from 'use-query-params';
import { SearchOption } from './types';

const SearchOptionParam = createEnumParam<SearchOption>(['코디', '아이템']);

const useSearchOptionParam = () => {
  const searchOptionParam = useQueryParam(
    'searchOption',
    withDefault(SearchOptionParam, '코디'),
    {
      removeDefaultsFromUrl: true,
    }
  );

  return searchOptionParam;
};

export default useSearchOptionParam;
