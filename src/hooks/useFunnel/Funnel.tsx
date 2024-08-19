import { ReactElement, ReactNode } from 'react';

export interface FunnelProps<StepType> {
  children:
    | Array<ReactElement<StepProps<StepType>>>
    | ReactElement<StepProps<StepType>>;
}

export interface StepProps<StepType> {
  name: StepType;
  activeStep: StepType;
  children: ReactNode;
}

export function Step<StepType>({
  name,
  activeStep,
  children,
}: StepProps<StepType>) {
  if (name !== activeStep) {
    return null;
  }

  return children;
}

export function Funnel<StepType>({ children }: FunnelProps<StepType>) {
  return children;
}
