import { ComponentPropsWithoutRef } from 'react';
import MaterialSymbol from '../../atoms/material-symbol';
import { DropdownValueType } from '../dropdown/types';

interface SelectTriggerButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'value'> {
  value: DropdownValueType;
}

function SelectTriggerButton({ value, ...props }: SelectTriggerButtonProps) {
  return (
    <button
      type="button"
      className="h-11 justify-between rounded border border-gray-400 pl-3 pr-1 flex-y-center"
      {...props}
    >
      <span className="font-medium text-gray-500">{value || '선택하기'}</span>
      <MaterialSymbol name="keyboard_arrow_down" className="text-gray-500" />
    </button>
  );
}

export default SelectTriggerButton;
