import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Authentication.css'

const Authentication = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password are valid.
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
    } else if (password.length < 6) {
      setError('Please enter a password that is at least 6 characters long.');
    } else {
      navigate('/user-feed');
    }
  };
  return (
    <div className='auth-section'>
         <h1>Login</h1>
      <p>
        {error}
      </p>
    <div>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
      <button 
      onClick={handleSubmit}
      className='bg-[#3b82f6] text-white px-4 py-2 rounded-lg w-44 h-12'
      >
        Login
    </button>
    </div>
  )
}

export default Authentication