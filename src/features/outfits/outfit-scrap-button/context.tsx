import { createContext, ReactNode } from 'react';

export interface OutfitScrapButtonContextType {
  outfitPostId?: number;
  outfitItemId?: number;
  isScrapped: boolean | null;
  scrapCount?: number;
  className?: string;
}

export const OutfitScrapButtonContext =
  createContext<OutfitScrapButtonContextType | null>(null);

interface OutfitScrapButtonProviderProps extends OutfitScrapButtonContextType {
  children: ReactNode;
}

export function OutfitScrapButtonProvider({
  children,
  ...props
}: OutfitScrapButtonProviderProps) {
  return (
    <OutfitScrapButtonContext.Provider value={props}>
      {children}
    </OutfitScrapButtonContext.Provider>
  );
}
