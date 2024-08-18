import { Outlet } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import ApiErrorBoundary from '../components/errors/ApiErrorBoundary';
import RootErrorBoundary from '../components/errors/RootErrorBoundary';

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
