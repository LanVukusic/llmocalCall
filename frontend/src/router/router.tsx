import { createBrowserRouter } from 'react-router-dom';
import App from '../views/Hello';
import { Authentication } from '../views/Login';
import { DashBoard } from '../components/dashboard/Dashboard';
import { Register } from '../views/Register';
import Room from '../views/Video';
import { TranscriptView } from '../views/TrascriptView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // <ProtectedPath redirectUrl="/auth">
      <App />
      // </ProtectedPath>
    ),
    children: [
      {
        path: '/',
        element: <DashBoard />,
      },
      {
        path: '/transcript/:transcriptId',
        element: <TranscriptView />,
      },
      {
        path: '/video',
        element: <Room match={{ params: { roomID: 'dsa' } }} />,
      },
    ],
  },
  {
    path: '/login',
    element: <Authentication />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
