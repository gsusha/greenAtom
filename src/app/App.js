import {Route, Routes} from 'react-router-dom';
import './App.css';
import UserMain from "./pages/user";

function App() {
    return (
        <Routes>
            <Route path='/' element={<UserMain/>}/>
        </Routes>
    );
}

export default App;
