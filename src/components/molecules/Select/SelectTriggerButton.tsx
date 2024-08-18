import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { ComponentPropsWithoutRef } from 'react';
import { DropdownValueType } from '../Dropdown/types';

interface SelectTriggerButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'value'> {
  value: DropdownValueType;
}

function SelectTriggerButton({ value, ...props }: SelectTriggerButtonProps) {
  return (
    <button
      type="button"
      className="h-9 justify-between rounded border border-gray-400 bg-white pl-3 pr-1 flex-y-center"
      {...props}
    >
      <span className="font-medium text-gray-500">{value}</span>
      <KeyboardArrowDownRoundedIcon className="text-gray-500" />
    </button>
  );
}

export default SelectTriggerButton;
