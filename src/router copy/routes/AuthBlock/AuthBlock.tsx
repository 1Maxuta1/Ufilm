import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../../../components/Forms/LoginForm';
import Logo from '../../../components/Logo/Logo';
import { useAppSelector } from '../../../hooks/hooks';
import './AuthBlock.css';



const AuthBlock = () => {
const isAuthenticated = useAppSelector(state=>state.user.isAuthorized)
  return !isAuthenticated ? (
    <>
      <header className='flex justify-center mt-[130px]'>
        <Logo />
      </header>

      <LoginForm />
    </>
  ) : (
    <Navigate to={'/dashboard'} />
  );
};

export default AuthBlock;
