import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Loading from './components/Loading/Loading';
import { useAppSelector } from './hooks/useAppSelector';
import { checkAuth } from './store/actions/auth';


const App = () => {
  const dispatch = useDispatch()
  const { isLoading } = useAppSelector(state => state.auth)

  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  if (isLoading) return <Loading />

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;