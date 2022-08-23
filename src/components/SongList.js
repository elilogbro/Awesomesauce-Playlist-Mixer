import React, { useState } from 'react';
import SongCard from "./SongCard"
import Form from "./Form";
 
function SongList({ songs, setSongGenre, addNewSong }) {
    const songList = songs.map(song => <SongCard key={song.id} song={song} />)
 
    const [showForm, setShowForm] = useState(true)
   
 
    const handleForm = () => {
        setShowForm(!showForm)
    }
 
    return (
        <div className="songs-container">
            <div className="genre-navbar">
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>ROCK</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>FOLK</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>INDIE</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>HIP-HOP</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>ELECTRONIC</nav>
            </div>
            <div className="form-songlist-container">
                <div className="form-container">
                    <button id="form-button" onClick={handleForm}>{showForm ? "Hide Form" : "Show Form"}</button>
                    {showForm ? <Form addNewSong={addNewSong} /> : null }
                </div>
                <div className="songlist-container">
                    {songList}
                </div>
            </div>
        </div>
    )
}
 
export default SongList;
