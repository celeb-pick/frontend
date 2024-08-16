import { Outlet } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import ApiErrorBoundary from '../components/errors/api-error-boundary';
import RootErrorBoundary from '../components/errors/root-error-boundary';

function RouteWrapper() {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <RootErrorBoundary>
        <ApiErrorBoundary>
          <Outlet />
        </ApiErrorBoundary>
      </RootErrorBoundary>
    </QueryParamProvider>
  );
}

export default RouteWrapper;
