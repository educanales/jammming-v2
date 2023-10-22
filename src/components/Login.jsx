import { useEffect, useState } from "react";
import "./Login.css"

export default function Login({ token, setToken }) {

  const CLIENT_ID = '843b653d28bf43c9844a6b8b38a93874';
  const REDIRECT_URI = 'http://localhost:5173/';
  const URL = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  useEffect(() => {
    const hash = window.location.hash;
    let accessToken = window.localStorage.getItem('token');
    if(!accessToken && hash) {
      accessToken = hash.substring(1).split('&').find(element => element.startsWith('access_token')).split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', accessToken);
    }
    setToken(accessToken);
  }, [])

  const handleLogout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  }

  return (
    <header>
      <h1>Jammming</h1>
      {!token ? (
        <a
          className="login-btn"
          href={`${URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login
        </a>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </header>
  );
}