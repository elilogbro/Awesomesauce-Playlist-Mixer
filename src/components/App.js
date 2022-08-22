import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import SongList from './SongList';
import FavoriteSongList from './FavoriteSongList';


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/songs')
          .then(res => res.json())
          .then(data => setSongs(data))
        }, [])



  return (
    <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/songs" element={<SongList songs={songs} />} />
            <Route path="/favorite-songs" element={<FavoriteSongList />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
