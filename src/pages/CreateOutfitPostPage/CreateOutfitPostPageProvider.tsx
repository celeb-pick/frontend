import { createContext, ReactNode, useMemo } from 'react';
import useCreateOutfitPostForm from './useCreateOutfitPostForm';
import useCreateOutfitPostFunnel from './useCreateOutfitPostFunnel';

type CreateOutfitPostPageContextType = ReturnType<
  typeof useCreateOutfitPostForm
> &
  ReturnType<typeof useCreateOutfitPostFunnel>;

export const CreateOutfitPostPageContext =
  createContext<CreateOutfitPostPageContextType | null>(null);

interface CreateOutfitPostPageProviderProps {
  children: ReactNode;
}

export function CreateOutfitPostPageProvider({
  children,
}: CreateOutfitPostPageProviderProps) {
  const formController = useCreateOutfitPostForm();
  const funnelController = useCreateOutfitPostFunnel();

  const value = useMemo(
    () => ({
      ...formController,
      ...funnelController,
    }),
    [formController, funnelController]
  );

  return (
    <CreateOutfitPostPageContext.Provider value={value}>
      {children}
    </CreateOutfitPostPageContext.Provider>
  );
}
