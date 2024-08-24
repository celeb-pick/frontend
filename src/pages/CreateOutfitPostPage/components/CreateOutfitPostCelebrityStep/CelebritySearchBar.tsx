import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { Dispatch, SetStateAction } from 'react';
import tw from 'twin.macro';
import Button from '../../../../components/atoms/Button';
import TextField from '../../../../components/atoms/TextField';
import CelebrityCategorySelect from '../../../../features/celebrities/components/CelebrityCategorySelect';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';

interface CelebritySearchBarProps {
  search: string | undefined;
  setSearch: Dispatch<SetStateAction<string | undefined>>;
}

function CelebritySearchBar({ search, setSearch }: CelebritySearchBarProps) {
  const { resetField } = useCreateOutfitPostPageContext();

  return (
    <div css={[tw`flex-y-center flex-wrap gap-4 mb-10`]}>
      <CelebrityCategorySelect />
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
          onClick={() => resetField('celebrityId')}
          css={[tw`ml-auto`]}
        >
          <span css={[tw`mr-1`]}>선택 초기화</span>
          <RestartAltRoundedIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
}

export default CelebritySearchBar;
