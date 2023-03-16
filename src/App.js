import { Routes, Route, Navigate } from 'react-router-dom';

import { Suspense, lazy, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import ProtectedRoute from 'components/ProtectedRoute';
import Loader from 'components/Loader';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const LazyLoginPage = lazy(() => import('scenes/loginPage'));
  const LazyProfilePage = lazy(() => import('scenes/profilePage'));
  const LazyHomePage = lazy(() => import('scenes/homePage'));

  return (
    <div className='app'>
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<LazyLoginPage />} />
            <Route
              path='/home'
              element={
                <ProtectedRoute>
                  <LazyHomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile/:userId'
              element={
                <ProtectedRoute>
                  <LazyProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
