import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLinks from './NavLinks';
import About from './About';
import SongList from './SongList';
import FavoriteSongList from './FavoriteSongList';




function App() {

  const [songs, setSongs] = useState([])
  const [songGenre, setSongGenre] = useState("")

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

  let filteredSongs = songs.filter(song => song.genre.toLowerCase().includes(songGenre.toLowerCase()))
  
  return (
    <div>
      <BrowserRouter>
        <NavLinks />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/songs" element={<SongList setSongs={setSongs} addNewSong={addNewSong} songs={filteredSongs} setSongGenre={setSongGenre}/>} />
            <Route path="/favorite-songs" element={<FavoriteSongList />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
