import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AdminMain from './pages/admin/';
import UserLayout from './layout/user/UserLayout';
import './assets/fonts/fonts.css';
import imgStart from './assets/images/user_start.png';
import UserMain from './pages/user/main/UserMain';
import FirstStep from './pages/user/first_step/FirstStep';
import SecondStep from './pages/user/second_step/SecondStep';
import ThirdStep from './pages/user/third_step/ThirdStep';
import UserEnd from './pages/user/end/UserEnd';

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
      <Route
        path="/first"
        element={
          <UserLayout>
            <FirstStep />
          </UserLayout>
        }
      />
      <Route
        path="/second"
        element={
          <UserLayout>
            <SecondStep />
          </UserLayout>
        }
      />
      <Route
        path="/third"
        element={
          <UserLayout>
            <ThirdStep />
          </UserLayout>
        }
      />
      <Route
        path="/end"
        element={
          <UserLayout>
            <UserEnd />
          </UserLayout>
        }
      />
      <Route path="/admin" element={<AdminMain />} />
    </Routes>
  );
}

export default App;
