import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import MessagePage from './pages/MessagesPage';
import LoginPage from './pages/LoginPage';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/messages" element={<MessagePage />}></Route>

        <Route path="/" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
