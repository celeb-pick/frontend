import { createContext, ReactNode } from 'react';
import useCreateOutfitPostForm from './useCreateOutfitPostForm';

type CreateOutfitPostPageContextType = ReturnType<
  typeof useCreateOutfitPostForm
>;

export const CreateOutfitPostPageContext =
  createContext<CreateOutfitPostPageContextType | null>(null);

interface CreateOutfitPostPageProviderProps {
  children: ReactNode;
}

export function CreateOutfitPostPageProvider({
  children,
}: CreateOutfitPostPageProviderProps) {
  return (
    <CreateOutfitPostPageContext.Provider value={useCreateOutfitPostForm()}>
      {children}
    </CreateOutfitPostPageContext.Provider>
  );
}
