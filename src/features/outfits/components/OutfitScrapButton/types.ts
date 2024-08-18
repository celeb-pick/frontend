export type UseOutfitScrapReturnType = {
  updatedIsScrapped: boolean | undefined;
  updatedScrapCount: number | undefined;
  toggleScrap: () => void;
  isPending: boolean;
};
