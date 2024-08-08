import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/layout/layout';
import HomePage from '../pages/home';

type Router = ReturnType<typeof createBrowserRouter>;

const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
