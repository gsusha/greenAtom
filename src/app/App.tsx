import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import UserMain from './pages/user/';
import AdminMain from './pages/admin/';
import UserLayout from './layout/user/UserLayout';
import './assets/fonts/fonts.css';
import imgStart from './assets/images/user_start.png';

// import imgEnd from './assets/images/user_end.jpg';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserLayout img={imgStart}>
            <UserMain />
          </UserLayout>
        }
      />
      <Route path="/admin" element={<AdminMain />} />
    </Routes>
  );
}

export default App;
