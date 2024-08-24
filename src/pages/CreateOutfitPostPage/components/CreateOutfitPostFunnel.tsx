import tw from 'twin.macro';
import useCreateOutfitPostFunnel from '../useCreateOutfitPostFunnel';
import CreateOutfitPostCelebrityStep from './CreateOutfitPostCelebrityStep';
import CreateOutfitPostGenderStep from './CreateOutfitPostGenderStep';
import CreateOutfitPostTitleStep from './CreateOutfitPostTitleStep';

function CreateOutfitPostFunnel() {
  const { Funnel, setStep } = useCreateOutfitPostFunnel();

  return (
    <div css={[tw`flex flex-col items-center flex-1 p-4 pb-6`]}>
      <Funnel>
        <CreateOutfitPostCelebrityStep />
        <CreateOutfitPostGenderStep />
        <Funnel.Step name="title">
          <CreateOutfitPostTitleStep
            onClickPrevious={() => setStep('gender')}
            onClickNext={() => setStep('outfitPostImage')}
          />
        </Funnel.Step>
      </Funnel>
    </div>
  );
}

export default CreateOutfitPostFunnel;
