import { useEffect, useState } from "react";
import "./Login.css"

export default function Login() {
  const [ token, setToken ] = useState('');


  const CLIENT_ID = '843b653d28bf43c9844a6b8b38a93874';
  const REDIRECT_URI = 'http://localhost:5173/';
  const URL = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  // #access_token=BQDGVhhs5BfvSaaAQUGjP2PP-up-M0UMjOXqCAWd81N7yp-PqRWbLzuhErYE780tQeR41gmB03BIpWMptENrYafANXlHJaApu2AxPp-FFmAdHUymOhDOV8YcjDPiosT1Zt42uMRmT-T2q-lgoSXPKFgFeLB2nYVs17uOs519&token_type=Bearer&expires_in=3600

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if(!token && hash) {
      token = hash.substring(1).split('&').find(element => element.startsWith('access_token')).split('=')[1];
      console.log(token)
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, [])

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  }

  return (
    <nav>
      <h1>Jammming</h1>
      {!token ? (
        <a
          className="login-btn"
          href={`${URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
}