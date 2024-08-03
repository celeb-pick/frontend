import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
} from 'react';
import type { DropdownValueType } from './types';

export interface DropdownContextType {
  value: DropdownValueType;
  setValue: Dispatch<SetStateAction<DropdownValueType>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DropdownContext = createContext<DropdownContextType | null>(null);

interface DropdownProviderProps extends DropdownContextType {
  children: ReactNode;
}

export function DropdownProvider({
  value,
  setValue,
  open,
  setOpen,
  children,
}: DropdownProviderProps) {
  const contextValue = useMemo(
    () => ({ value, setValue, open, setOpen }),
    [value, setValue, open, setOpen]
  );

  return (
    <DropdownContext.Provider value={contextValue}>
      {children}
    </DropdownContext.Provider>
  );
}
