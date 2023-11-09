import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logOut } from '../ApiServices/authService';
import { getLastMessages } from '../ApiServices/messagesService';

import './Messages.css';

const MessagePage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesData = getLastMessages();
    console.log('messagesData', messagesData)
    
    // setMessages
  }, []);

  const navigate = useNavigate();

  const handleLogOutClick = () => {
    logOut();
    navigate('/login');
  }

  return (
    <div>
      <button onClick={() => handleLogOutClick()}>Log Out</button>
      <div>Messages!!!</div>
    </div>
  )
}

export default MessagePage;
