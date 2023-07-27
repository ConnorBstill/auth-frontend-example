import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { logIn } from "../ApiServices/authService";

const RegisterPage = () => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate = useNavigate();

  const handleRegisterClick = async () => {
    const data = await logIn(usernameValue, passwordValue);
    console.log(data)

    if (!data.error) {
      localStorage.setItem('chatappjwt', data.data.jwt);
      navigate('/messages');
    } else {
      
    }
  }

  return (
    <div className="app">
      <h2>Log In</h2>
      <input onChange={(e) => setUsernameValue(e.target.value)} placeholder='username' />
      <input onChange={(e) => setPasswordValue(e.target.value)} placeholder='password' />

      <button onClick={() => handleRegisterClick()}>Register</button>
      <Link to='/'>If you don't have an account yet, click here to register</Link>
    </div>
  )
}

export default RegisterPage;
