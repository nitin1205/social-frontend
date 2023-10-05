import { useRoutes } from 'react-router-dom';

import { AuthTabs } from './pages/auth';

export const AppRouter = () => {
  const elemets = useRoutes(([
    {
      path: '/',
      element: <AuthTabs/>
    }
  ]));

  return elemets;
};