import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLinks from './NavLinks';
import About from './About';
import SongList from './SongList';
import FavoriteSongList from './FavoriteSongList';




function App() {
  
  const [songs, setSongs] = useState([])
  const [songGenre, setSongGenre] = useState("")
  const [favorite, setFavorite] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
      fetch('http://localhost:3000/songs')
          .then(res => res.json())
          .then(data => {  
            setSongs(data)
          })
        }, [])
          
  const addNewSong = (newSong) => {
    setSongs([...songs, newSong])
  }

  const handleDeletedSong = (id) => {
    setSongs(songs.filter(song => id !== song.id))
    setFavorite(favorite.filter(song => id !== song.id))
  }

  const handleUpdatedFavorite = (updatedSong) => {
    const updateSong = songs.map(song => song.id === updatedSong.id ? updatedSong : song)
    setSongs(updateSong)
  }
  
  let filteredSongs = songs.filter(song => song.genre.toLowerCase().includes(songGenre.toLowerCase()))
  let filteredSearch = filteredSongs.filter(songs => songs.lyrics.toLowerCase().includes(search.toLowerCase()))
  let favoritedSong =  songs.filter(song => song.isFavorited === true)

  return (
    <div>
      <BrowserRouter>
        <NavLinks />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/songs" 
              element={<SongList 
                setSongs={setSongs} 
                addNewSong={addNewSong} 
                songs={filteredSearch} 
                setSongGenre={setSongGenre} 
                favorite={favorite} 
                setFavorite={setFavorite} 
                handleDeletedSong={handleDeletedSong}
                search={search}
                setSearch={setSearch}
                handleUpdatedFavorite={handleUpdatedFavorite}/>}
              />
            <Route path="/favorite-songs"
              element={<FavoriteSongList 
                favorite={favoritedSong} 
                setFavorite={setFavorite}
                handleUpdatedFavorite={handleUpdatedFavorite}
              />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
