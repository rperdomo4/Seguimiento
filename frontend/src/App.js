import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
