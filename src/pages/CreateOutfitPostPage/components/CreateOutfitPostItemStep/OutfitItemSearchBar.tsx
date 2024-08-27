import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { Dispatch, SetStateAction } from 'react';
import tw from 'twin.macro';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import Button from '../../../../components/atoms/Button';
import TextField from '../../../../components/atoms/TextField';
import OutfitItemCategorySelect from '../../../../features/outfits/components/OutfitItemCategorySelect';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';

interface OutfitItemSearchBarProps {
  search: string | undefined;
  setSearch: Dispatch<SetStateAction<string | undefined>>;
}

function OutfitItemSearchBar({ search, setSearch }: OutfitItemSearchBarProps) {
  const { resetField } = useCreateOutfitPostPageContext();
  const [query, setQuery] = useQueryParam(
    'itemCategory',
    withDefault(StringParam, null)
  );

  return (
    <div css={[tw`flex-y-center flex-wrap gap-4 mb-10`]}>
      <OutfitItemCategorySelect value={query} onChange={setQuery} />
      <TextField
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        label="검색"
        css={[tw`flex-1`]}
      />
      <div css={[tw`w-full`]}>
        <Button
          color="indigo"
          size="small"
          onClick={() => resetField('itemIds')}
          css={[tw`ml-auto`]}
        >
          <span css={[tw`mr-1`]}>선택 초기화</span>
          <RestartAltRoundedIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
}

export default OutfitItemSearchBar;
