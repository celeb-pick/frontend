import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useLocation } from 'react-router-dom';
import tw from 'twin.macro';
import Layout from '../../common/Layout';
import LogoAppBar from '../../common/Layout/LayoutLogoAppBar';
import ErrorSection from '../ErrorSection';

interface RootErrorBoundaryProps {
  children: ReactNode;
}

function FallbackComponent() {
  return (
    <Layout>
      <LogoAppBar />
      <ErrorSection
        title="에러가 발생 했습니다."
        subTittle="관리자에게 문의해 주세요."
        css={[tw`flex-1`]}
      />
    </Layout>
  );
}

function RootErrorBoundary({ children }: RootErrorBoundaryProps) {
  const { key } = useLocation();

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} resetKeys={[key]}>
      {children}
    </ErrorBoundary>
  );
}

export default RootErrorBoundary;
