import { useState } from 'react'
import './App.css'
import Playlist from './components/Playlist'
import ResultsList from './components/ResultsList'
import SearchBar from './components/SearchBar'
import Login from './components/Login'

function App() {
  const [ searchItem, setSearchItem ] = useState('');
  const [ trackResults, setTrackResults ] = useState([]);
  const [ playlist, setPlaylist ] = useState([]);
  const [ token, setToken ] = useState('');

  const handleInputChange = e => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  }

  const searchTracks = async (e) => {
    e.preventDefault();
    const headers = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const url = new URL('https://api.spotify.com/v1/search');
    url.searchParams.append('q', searchItem);
    url.searchParams.append('type', 'track');
    try {
        const response = await fetch(url, headers);
        if (!response.ok) {
          throw new Error('La solicitud no se pudo completar correctamente.');
        }
        const data = await response.json();
        const tracks = data.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
        setTrackResults(tracks);
    } catch (error) {
        console.error('Error al buscar:', error);
    }
  };

  const handleAddPlaylist = id => {
    const selectedTrack = trackResults.filter((track) =>
      track.id === id
    )
    if (!playlist.find(item => item.id === id)) {
      setPlaylist([ ...playlist, ...selectedTrack ]);
    }
  };

  const handleDeleteFromPlaylist = id => {
    const selectedTrack = playlist.filter((track) =>
      track.id !== id
    )
    setPlaylist(selectedTrack);
  };

  return (
    <>      
      <Login token={token} setToken={setToken}/>
      <SearchBar 
        searchTracks={searchTracks}
        value={searchItem}
        onChange={handleInputChange}
      />
      <main className='main-container'>
        <ResultsList 
          trackResults={trackResults}
          handleAddPlaylist={handleAddPlaylist}
        />
        <Playlist 
          playlist={playlist}
          setPlaylist={setPlaylist}
          handleDeleteFromPlaylist={handleDeleteFromPlaylist}
          token={token}
        />
      </main>
    </>
  )
}

export default App