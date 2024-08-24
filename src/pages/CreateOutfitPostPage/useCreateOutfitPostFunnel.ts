import useFunnel from '../../hooks/useFunnel';

const useCreateOutfitPostFunnel = () => {
  return useFunnel([
    'celebrity',
    'gender',
    'title',
    'outfitPostImage',
    'outfitItems',
  ] as const);
};

export default useCreateOutfitPostFunnel;
