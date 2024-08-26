import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CustomToastContainer } from './config/react-tostify';
import { queryClient } from './config/tanstack-query';
import Router from './router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <CustomToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
