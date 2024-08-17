import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import { MyScrapTabType } from './types';

const useTabQueryParam = () => {
  return useQueryParam(
    'tab',
    withDefault(StringParam, 'outfitPost' satisfies MyScrapTabType)
  );
};

export default useTabQueryParam;
