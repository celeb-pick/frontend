import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import MyScrapPage from '../pages/my-scrap';
import SignupPage from '../pages/signup';
import RouteWrapper from './route-wrapper';

type RouterType = ReturnType<typeof createBrowserRouter>;

const router: RouterType = createBrowserRouter([
  {
    path: '/',
    element: <RouteWrapper />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/users/me/scraps',
        element: <MyScrapPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
