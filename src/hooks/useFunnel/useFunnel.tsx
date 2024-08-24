import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import {
  Funnel as FunnelComponent,
  Step as StepComponent,
  StepProps,
} from './Funnel';

/**
 * 퍼넬 스텝에 맞게 UI를 보여주고 스텝의 라우트 히스토리를 관리 해주는 Hook 입니다.
 * 정확한 타입 추론을 위해 반드시 `steps`는 as const를 사용해 객체 리터럴로 인자가 전달되어야 합니다.
 *
 * @example
 *
 * ```tsx
 * const { Funnel, setStep } = useFunnel(['스텝1', '스텝2'] as const)
 * ```
 */
const useFunnel = <T extends Array<string>>(steps: T) => {
  type StepType = T[number];

  const [step, setStep] = useQueryParam(
    'step',
    withDefault(StringParam, steps[0])
  ) as [StepType, (step: StepType) => void];

  function StepRenderer({
    children,
    name,
  }: Omit<StepProps<StepType>, 'activeStep'>) {
    return (
      <StepComponent<StepType> name={name} activeStep={step}>
        {children}
      </StepComponent>
    );
  }

  const Funnel = Object.assign(FunnelComponent, { Step: StepRenderer });

  return { Funnel, setStep };
};

export default useFunnel;
