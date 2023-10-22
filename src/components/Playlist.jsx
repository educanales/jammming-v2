import { useState } from "react"

export default function Playlist({ playlist, handleDeleteFromPlaylist }) {
  const [ playlistName, setPlaylistName ] = useState('Playlist Name');

  const handleNameChange = e => {
    setPlaylistName(e.target.value);
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
        onFocus
        onBlur
      /> 
      {list}
      <button className="save-btn">Save to Spotify</button>
    </div>
  )
}