import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import tw from 'twin.macro';

interface CreateOutfitPostProgressProps {
  currentStep: number;
}

function ProgressLine({
  step,
  currentStep,
}: CreateOutfitPostProgressProps & { step: number }) {
  return (
    <div
      css={[
        tw`w-full h-1 px-5 bg-gray-300`,
        currentStep > step + 1 && tw`bg-indigo-500`,
      ]}
    />
  );
}

function ProgressIcon({
  step,
  currentStep,
}: CreateOutfitPostProgressProps & { step: number }) {
  return (
    <CheckCircleRoundedIcon css={[currentStep > step && tw`text-indigo-500`]} />
  );
}

function CreateOutfitPostProgress({
  currentStep,
}: CreateOutfitPostProgressProps) {
  return (
    <div css={[tw`relative flex-y-center w-full text-gray-300`]}>
      <ProgressIcon currentStep={currentStep} step={1} />
      <ProgressLine currentStep={currentStep} step={1} />

      <ProgressIcon currentStep={currentStep} step={2} />
      <ProgressLine currentStep={currentStep} step={2} />

      <ProgressIcon currentStep={currentStep} step={3} />
      <ProgressLine currentStep={currentStep} step={3} />

      <ProgressIcon currentStep={currentStep} step={4} />
      <ProgressLine currentStep={currentStep} step={4} />

      <ProgressIcon currentStep={currentStep} step={5} />
    </div>
  );
}

export default CreateOutfitPostProgress;
