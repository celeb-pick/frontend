import { ReactNode } from 'react';
import { DropdownValueType } from '../dropdown/types';

export type SelectOptionsType = Array<{
  value: DropdownValueType;
  label?: ReactNode;
}>;
