import { useRoutes } from 'react-router-dom';

import { AuthTabs, ResetPassword, ForgotPassword } from './pages/auth';

export const AppRouter = () => {
  const elemets = useRoutes(([
    {
      path: '/',
      element: <AuthTabs/>
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword/>
    },
    {
      path: '/reset-password',
      element: <ResetPassword/>
    }
  ]));

  return elemets;
};
