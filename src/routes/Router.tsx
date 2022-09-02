import { Routes, Route } from 'react-router-dom';
import { Coincidence, Atm, IsPrime, RandomNumber } from '../pages';

export const mainRoutes = [
  {
    path: '/coincidence',
    element: <Coincidence />,
  },
  {
    path: '/atm',
    element: <Atm />,
  },
  {
    path: '/isPrime',
    element: <IsPrime />,
  },
  {
    path: '/randomNumber',
    element: <RandomNumber />,
  },
  {
    path: '/*',
    element: <Coincidence />,
  },
];

export const Router = () => {
  return (
    <Routes>
      {mainRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
