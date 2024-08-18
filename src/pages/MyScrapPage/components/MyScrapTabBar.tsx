import tw from 'twin.macro';
import { MyScrapTabType } from '../types';
import useTabQueryParam from '../useTabQueryParam';

interface MyScrapTabProps {
  value: MyScrapTabType;
  label: string;
}

function MyScrapTab({ value, label }: MyScrapTabProps) {
  const [query, setQuery] = useTabQueryParam();

  const isActive = query === value;

  return (
    <button
      type="button"
      onClick={() => setQuery(value)}
      css={[
        tw`h-16 border-solid border-b-2 border-gray-300`,
        isActive && tw`border-black`,
      ]}
    >
      <span css={[tw`font-medium text-gray-300`, isActive && tw`text-black`]}>
        {label}
      </span>
    </button>
  );
}

function MyScrapTabBar() {
  return (
    <div css={[tw`grid grid-cols-2`]}>
      <MyScrapTab value="outfitPost" label="스크랩한 코디" />
      <MyScrapTab value="outfitItem" label="스크랩한 아이템" />
    </div>
  );
}

export default MyScrapTabBar;
