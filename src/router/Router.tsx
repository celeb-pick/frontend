import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateOutfitPostPage from '../pages/CreateOutfitPostPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MyScrapOutfitItemPage from '../pages/MyScrapOutfitItemPage';
import MyScrapOutfitPostPage from '../pages/MyScrapOutfitPostPage';
import MyScrapPage from '../pages/MyScrapPage';
import SignupPage from '../pages/SignupPage';
import ProtectedRoute from './ProtectedRoute';
import RouteWrapper from './RouteWrapper';

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
        element: (
          <ProtectedRoute permission="anonymous">
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <ProtectedRoute permission="anonymous">
            <SignupPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/users/me/scraps',
        element: (
          <ProtectedRoute permission="user">
            <MyScrapPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/users/me/scraps/outfit-posts/:outfitPostId',
        element: (
          <ProtectedRoute permission="user">
            <MyScrapOutfitPostPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/users/me/scraps/outfit-items/:outfitItemId',
        element: (
          <ProtectedRoute permission="user">
            <MyScrapOutfitItemPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/outfit-posts/new',
        element: (
          <ProtectedRoute permission="user">
            <CreateOutfitPostPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
