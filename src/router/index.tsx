import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MyScrapPage from '../pages/MyScrapPage';
import MyScrapOutfitItemPage from '../pages/MyScrapOutfitItemPage';
import MyScrapOutfitPostPage from '../pages/MyScrapOutfitPostPage';
import SignupPage from '../pages/SignupPage';
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
      {
        path: '/users/me/scraps/outfit-posts/:outfitPostId',
        element: <MyScrapOutfitPostPage />,
      },
      {
        path: '/users/me/scraps/outfit-items/:outfitItemId',
        element: <MyScrapOutfitItemPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
