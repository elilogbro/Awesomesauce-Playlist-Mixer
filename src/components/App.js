import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import SongList from './SongList';
import FavoriteSongList from './FavoriteSongList';


function App() {


  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/songs" element={<SongList />} />
          <Route path="/favorite-songs" element={<FavoriteSongList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
