import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLinks from './NavLinks';
import About from './About';
import SongList from './SongList';
import FavoriteSongList from './FavoriteSongList';




function App() {

  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [genres, setGenres] = useState("All")

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


    const filterGenre = (e) => {
            setFilteredSongs(songs.filter(song => song.genre === e.target.innerText.toLowerCase()))
    }

  return (
    <div>
      <BrowserRouter>
        <NavLinks />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/songs" element={<SongList addNewSong={addNewSong} songs={filteredSongs} filterGenre={filterGenre}/>} />
            <Route path="/favorite-songs" element={<FavoriteSongList />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
