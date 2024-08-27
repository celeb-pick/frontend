import { ChangeEvent, useId } from 'react';
import tw from 'twin.macro';
import Chip from '../../../../components/atoms/Chip';
import { OutfitItemListResponse } from '../../../../types/outfit';
import { OUTFIT_ITEM_MAX_SELECT_COUNT } from '../../constants';
import useCreateOutfitPostPageContext from '../../useCreateOutfitPostPageContext';

interface OutfitItemListContentProps {
  pagesData: Array<OutfitItemListResponse>;
}

interface OutfitItemListRowProps {
  outfitItem: OutfitItemListResponse['results'][number];
  OutfitItemCheckboxId: string;
}

function EmptyView() {
  return (
    <div className="h-40 flex-center">
      관련 코디 아이템이 존재하지 않습니다😥
    </div>
  );
}

function OutfitItemListRow({
  outfitItem,
  OutfitItemCheckboxId,
}: OutfitItemListRowProps) {
  const outfitItemId = useId();
  const { itemIds } = useCreateOutfitPostPageContext();
  const isSelected = itemIds.value.includes(outfitItem.id);
  const disabled =
    !isSelected && itemIds.value.length >= OUTFIT_ITEM_MAX_SELECT_COUNT;

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (event.target.checked) {
      itemIds.onChange([...itemIds.value, value]);
    } else {
      itemIds.onChange(itemIds.value.filter((id) => id !== value));
    }
  };

  return (
    <label
      htmlFor={outfitItemId}
      css={[
        tw`flex-y-center flex-wrap gap-x-2.5 p-3 border-solid border-b`,
        isSelected && tw`bg-indigo-50`,
        !disabled && tw`cursor-pointer`,
      ]}
    >
      <input
        type="checkbox"
        name={OutfitItemCheckboxId}
        id={outfitItemId}
        value={outfitItem.id}
        onChange={handleChangeValue}
        checked={isSelected}
        disabled={disabled}
      />
      <img
        src={outfitItem.image}
        alt={outfitItem.name}
        css={[tw`w-28 h-28 rounded`]}
      />
      <Chip label={outfitItem.category} color="blue" />
      <p css={[tw`flex-1 line-clamp-3 break-words font-medium`]}>
        {outfitItem.brand.name} - {outfitItem.name}
      </p>
    </label>
  );
}

function OutfitItemListContent({ pagesData }: OutfitItemListContentProps) {
  const OutfitItemCheckboxId = useId();

  const isEmpty = pagesData[0].count === 0;
  if (isEmpty) {
    return <EmptyView />;
  }

  return (
    <div css={[tw`w-full`]}>
      {pagesData.map(({ results: outfitItemList }) =>
        outfitItemList.map((outfitItem) => (
          <OutfitItemListRow
            key={outfitItem.id}
            outfitItem={outfitItem}
            OutfitItemCheckboxId={OutfitItemCheckboxId}
          />
        ))
      )}
    </div>
  );
}

export default OutfitItemListContent;
