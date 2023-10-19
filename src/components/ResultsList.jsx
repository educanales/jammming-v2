export default function ResultsList({ trackResults, handleAddPlaylist }) {
  const list = trackResults.map(track =>
    <div className='track-container' key={track.id}>
      <div>
        <h3>{track.songName}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <div>
        <button
          className="round-btn"
          onClick={() => handleAddPlaylist(track.id)}
        >+
        </button>
      </div>
    </ div>
    )

  return (
    <div className="container">
      <h2 className="header2">Results</h2>
      {list}
    </div>
  )
}