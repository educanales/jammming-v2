import { useEffect } from "react";
import "./Login.css"

export default function Login({ token, setToken }) {

  const CLIENT_ID = '843b653d28bf43c9844a6b8b38a93874';
  const REDIRECT_URI = 'https://edu-jammming.netlify.app/';
  const URL = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPES = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

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
          href={`${URL}?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login
        </a>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </header>
  );
}