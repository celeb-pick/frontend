import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import useCreateOutfitPostForm from './useCreateOutfitPostForm';

type CreateOutfitPostPageContextType = ReturnType<
  typeof useCreateOutfitPostForm
> & {
  originalImageUrl: string | undefined;
  setOriginalImageUrl: Dispatch<SetStateAction<string | undefined>>;
  croppedImageUrl: string | undefined;
  setCroppedImageUrl: Dispatch<SetStateAction<string | undefined>>;
};

export const CreateOutfitPostPageContext =
  createContext<CreateOutfitPostPageContextType | null>(null);

interface CreateOutfitPostPageProviderProps {
  children: ReactNode;
}

export function CreateOutfitPostPageProvider({
  children,
}: CreateOutfitPostPageProviderProps) {
  const formController = useCreateOutfitPostForm();
  const [originalImageUrl, setOriginalImageUrl] = useState<string>();
  const [croppedImageUrl, setCroppedImageUrl] = useState<string>();

  const value = useMemo(
    () => ({
      ...formController,
      originalImageUrl,
      setOriginalImageUrl,
      croppedImageUrl,
      setCroppedImageUrl,
    }),
    [
      formController,
      originalImageUrl,
      setOriginalImageUrl,
      croppedImageUrl,
      setCroppedImageUrl,
    ]
  );

  return (
    <CreateOutfitPostPageContext.Provider value={value}>
      {children}
    </CreateOutfitPostPageContext.Provider>
  );
}
