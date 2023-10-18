export default function Playlist({ playlist, handleDeleteFromPlaylist }) {
  
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
    )

  return (
    <div className="container">
      <h2>Playlist</h2>
      {list}
    </div>
  )
}