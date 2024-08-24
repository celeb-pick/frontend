import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import tw from 'twin.macro';

interface CreateOutfitPostProgressProps {
  stepNumber: number;
}

function ProgressLine({
  level,
  stepNumber,
}: CreateOutfitPostProgressProps & { level: number }) {
  return (
    <div
      css={[
        tw`w-full h-1 px-5 bg-gray-300`,
        stepNumber - 1 > level && tw`bg-indigo-500`,
      ]}
    />
  );
}

function ProgressIcon({
  level,
  stepNumber,
}: CreateOutfitPostProgressProps & { level: number }) {
  return (
    <CheckCircleRoundedIcon css={[stepNumber > level && tw`text-indigo-500`]} />
  );
}

function CreateOutfitPostProgress({
  stepNumber,
}: CreateOutfitPostProgressProps) {
  return (
    <div css={[tw`relative flex-y-center w-full text-gray-300`]}>
      <ProgressIcon stepNumber={stepNumber} level={1} />
      <ProgressLine stepNumber={stepNumber} level={1} />

      <ProgressIcon stepNumber={stepNumber} level={2} />
      <ProgressLine stepNumber={stepNumber} level={2} />

      <ProgressIcon stepNumber={stepNumber} level={3} />
      <ProgressLine stepNumber={stepNumber} level={3} />

      <ProgressIcon stepNumber={stepNumber} level={4} />
      <ProgressLine stepNumber={stepNumber} level={4} />

      <ProgressIcon stepNumber={stepNumber} level={5} />
    </div>
  );
}

export default CreateOutfitPostProgress;
