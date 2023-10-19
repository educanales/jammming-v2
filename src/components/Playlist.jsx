import { useState } from "react"

export default function Playlist({ playlist, handleDeleteFromPlaylist }) {
  const [ playlistName, setPlaylistName ] = useState('Playlist Name');
  const [ showEdit, setShowEdit ] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  }

  const handleNameChange = e => {
    setPlaylistName(e.target.value);
  }


  const list = playlist.map(track =>
    <div className="track-container" key={track.id}>
      <div>
        <h3>{track.songName}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <div>
        <button onClick={() => handleDeleteFromPlaylist(track.id)}>-</button>
      </div>
    </div>
    );

  return (
    <div className="container">
      {showEdit ? (
        <input 
          className="playlist-name"
          type="text"
          value={playlistName}
          onChange={handleNameChange}
        />
      ) : (        
          <h2 onFocus={handleEdit}>{playlistName}</h2>
        )
      }
      {list}
      <button onClick={handleEdit}>Save to Spotify</button>
    </div>
  )
}