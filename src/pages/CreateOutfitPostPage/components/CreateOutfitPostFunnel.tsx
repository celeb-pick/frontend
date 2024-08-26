import tw from 'twin.macro';
import useCreateOutfitPostFunnel from '../useCreateOutfitPostFunnel';
import CreateOutfitPostCelebrityStep from './CreateOutfitPostCelebrityStep';
import CreateOutfitPostGenderStep from './CreateOutfitPostGenderStep';
import CreateOutfitPostImageStep from './CreateOutfitPostImageStep';
import CreateOutfitPostTitleStep from './CreateOutfitPostTitleStep';
import CreateOutfitPostItemStep from './CreateOutfitPostItemStep/CreateOutfitPostItemStep';

function CreateOutfitPostFunnel() {
  const { Funnel, setStep } = useCreateOutfitPostFunnel();

  return (
    <div css={[tw`flex flex-col items-center flex-1 p-4 pb-6`]}>
      <Funnel>
        <Funnel.Step name="celebrity">
          <CreateOutfitPostCelebrityStep
            onClickNext={() => setStep('gender')}
          />
        </Funnel.Step>
        <Funnel.Step name="gender">
          <CreateOutfitPostGenderStep
            onClickPrevious={() => setStep('celebrity')}
            onClickNext={() => setStep('title')}
          />
        </Funnel.Step>
        <Funnel.Step name="title">
          <CreateOutfitPostTitleStep
            onClickPrevious={() => setStep('gender')}
            onClickNext={() => setStep('outfitPostImage')}
          />
        </Funnel.Step>
        <Funnel.Step name="outfitPostImage">
          <CreateOutfitPostImageStep
            onClickPrevious={() => setStep('title')}
            onClickNext={() => setStep('outfitItems')}
          />
        </Funnel.Step>
        <Funnel.Step name="outfitItems">
          <CreateOutfitPostItemStep
            onClickPrevious={() => setStep('outfitPostImage')}
          />
        </Funnel.Step>
      </Funnel>
    </div>
  );
}

export default CreateOutfitPostFunnel;
