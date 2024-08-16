import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';

import { HttpStatusCode, isAxiosError } from 'axios';
import tw from 'twin.macro';
import { generateServerErrorMessage } from '../../../utils/error';
import ErrorSection from '../error-section';

interface LocalApiErrorBoundaryProps {
  children: ReactNode;
  height?: string | number;
}

interface FallbackComponentProps extends FallbackProps {
  className?: string;
}

function FallbackComponent({
  error,
  resetErrorBoundary,
  className,
}: FallbackComponentProps) {
  if (!isAxiosError(error)) {
    throw error;
  }

  if (error.response?.status === HttpStatusCode.Unauthorized) {
    window.location.href = '/login';
    return null;
  }

  return (
    <ErrorSection
      title={generateServerErrorMessage(error)}
      subTittle="조금 뒤 다시 시도해 주세요."
      resetErrorBoundary={resetErrorBoundary}
      css={[tw`bg-gray-50`]}
      className={className}
    />
  );
}

function LocalApiErrorBoundary({
  children,
  height,
}: LocalApiErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();
  const { key } = useLocation();

  return (
    <ErrorBoundary
      /**
       * 리렌더링 될 때마다 Fallback의 함수 정의가 재생성 되는건
       * ErrorBoundary에선 큰 의미가 없다고 생각해 eslint 규칙을 disabled 했습니다.
       */
      // eslint-disable-next-line
      fallbackRender={(props) => (
        <FallbackComponent {...props} css={{ height }} />
      )}
      onReset={reset}
      resetKeys={[key]}
    >
      {children}
    </ErrorBoundary>
  );
}

export default LocalApiErrorBoundary;
