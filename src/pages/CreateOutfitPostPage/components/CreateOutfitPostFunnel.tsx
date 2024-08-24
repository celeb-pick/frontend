import tw from 'twin.macro';
import useCreateOutfitPostPageContext from '../useCreateOutfitPostPageContext';
import CreateOutfitPostCelebrityStep from './CreateOutfitPostCelebrityStep';

function CreateOutfitPostFunnel() {
  const { Funnel } = useCreateOutfitPostPageContext();

  return (
    <div css={[tw`flex flex-col items-center flex-1 p-4 pb-6`]}>
      <Funnel>
        <CreateOutfitPostCelebrityStep />
      </Funnel>
    </div>
  );
}

export default CreateOutfitPostFunnel;
