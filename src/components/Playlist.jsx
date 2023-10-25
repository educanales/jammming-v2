import { useState } from "react"

export default function Playlist({ playlist, setPlaylist, handleDeleteFromPlaylist, token }) {
  const [ playlistName, setPlaylistName ] = useState('Playlist Name');

  const handleNameChange = e => {
    setPlaylistName(e.target.value);
  }

  const handleSavePlaylist = (e) => {
    e.preventDefault();
    const headers = { Authorization: `Bearer ${token}` };
    const uriTracks = playlist.map(track => track.uri);
    let userId;
    
    fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: playlistName}),
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: uriTracks}),
        });
      });
    });
    setPlaylist([]);
    setPlaylistName('Playlist Name');
  }

  const list = playlist.map(track =>
    <div className="track-container" key={track.id}>
      <div>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <div>
        <button
          className="round-btn"
          onClick={() => handleDeleteFromPlaylist(track.id)}        
        >-
        </button>
      </div>
    </div>
  );

  return (
    <div className="container">
      <input
        className="header2"
        type="text"
        value={playlistName}
        onChange={handleNameChange}
        // onFocus
        // onBlur
      /> 
      {list}
      <button
        className="save-btn"
        onClick={handleSavePlaylist}
      >
        Save to Spotify
      </button>
    </div>
  )
}