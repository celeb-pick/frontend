import useCreateOutfitPostPageContext from '../useCreateOutfitPostPageContext';
import CreateOutfitPostCelebrityStep from './CreateOutfitPostCelebrityStep/CreateOutfitPostCelebrityStep';

function CreateOutfitPostFunnel() {
  const { Funnel } = useCreateOutfitPostPageContext();

  return (
    <Funnel>
      <CreateOutfitPostCelebrityStep />
    </Funnel>
  );
}

export default CreateOutfitPostFunnel;
