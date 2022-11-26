import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import UserMain from './pages/user/';
import AdminMain from './pages/admin/';
import UserLayout from './layout/user/UserLayout';
import './assets/fonts/fonts.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserLayout>
            <UserMain />
          </UserLayout>
        }
      />
      <Route path="/admin" element={<AdminMain />} />
    </Routes>
  );
}

export default App;
