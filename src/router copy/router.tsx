import { createBrowserRouter } from 'react-router-dom';
import SignUpForm from '../components/Forms/SignUpForm';
import AuthBlock from './routes/AuthBlock/AuthBlock';
import Dashboard from './routes/Dashboard/Dashboard';
import LoginForm from '../components/Forms/LoginForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthBlock />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/signup',
    element: <SignUpForm />,
  },
]);
