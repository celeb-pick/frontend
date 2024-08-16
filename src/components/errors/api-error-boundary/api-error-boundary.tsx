import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';

import { HttpStatusCode, isAxiosError } from 'axios';
import { generateServerErrorMessage } from '../../../utils/error';
import Layout from '../../common/layout';
import LogoAppBar from '../../common/layout/logo-app-bar';
import ErrorSection from '../error-section';

interface ApiErrorBoundaryProps {
  children: ReactNode;
}

function FallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  if (!isAxiosError(error)) {
    throw error;
  }

  if (error.response?.status === HttpStatusCode.Unauthorized) {
    window.location.href = '/login';
    return null;
  }

  return (
    <Layout>
      <LogoAppBar />
      <ErrorSection
        title={generateServerErrorMessage(error)}
        subTittle="조금 뒤 다시 시도해 주세요."
        resetErrorBoundary={resetErrorBoundary}
      />
    </Layout>
  );
}

function ApiErrorBoundary({ children }: ApiErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();
  const { key } = useLocation();

  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={reset}
      resetKeys={[key]}
    >
      {children}
    </ErrorBoundary>
  );
}

export default ApiErrorBoundary;
