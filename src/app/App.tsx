import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AdminMain from './pages/admin/';
import './assets/fonts/fonts.css';
import UserMain from './pages/user/main/UserMain';
import FirstStep from './pages/user/first_step/FirstStep';
import SecondStep from './pages/user/second_step/SecondStep';
import ThirdStep from './pages/user/third_step/ThirdStep';
import UserEnd from './pages/user/end/UserEnd';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserMain />} />
      <Route path="/first" element={<FirstStep />} />
      <Route path="/second" element={<SecondStep />} />
      <Route path="/third" element={<ThirdStep />} />
      <Route path="/end" element={<UserEnd />} />

      <Route path="/admin" element={<AdminMain />} />
    </Routes>
  );
}

export default App;
