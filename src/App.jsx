import { useState } from 'react'
import './App.css'
import Playlist from './components/Playlist'
import ResultsList from './components/ResultsList'
import SearchBar from './components/SearchBar'

function App() {
  const [ searchItem, setSearchItem ] = useState('');
  const [ trackResults, setTrackResults] = useState(tracks);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredSongs = tracks.filter((track) =>
      track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.album.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTrackResults(filteredSongs);
  }  

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar 
        value={searchItem}
        onChange={handleInputChange}
      />
      <div className='main-container'>
        <ResultsList 
          trackResults={trackResults}
        />
        <Playlist />
      </div>
    </>
  )
}

export default App

const tracks = [
  {songName: "Blind", artist: "Korn", album: "Korn", id: 1},
  {songName: "Headup", artist: "Deftones", album: "Around the Fur", id: 2},
  {songName: "Bloodwork", artist: "36 Crazyfists", album: "A Snow Capped Romance", id: 3},
  {songName: "Ape Dos Mil", artist: "Glassjaw", album: "Workship and Tribute", id: 4},
  {songName: "Chi", artist: "Korn", album: "Life is Peachy", id: 5}
];