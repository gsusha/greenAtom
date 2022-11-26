import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserMain from './pages/user/index.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element=<UserLayout><UserMain /></UserLayout>/>
      <Route path='/admin' element=<AdminMain />/>
    </Routes>
  );
}

export default App;
