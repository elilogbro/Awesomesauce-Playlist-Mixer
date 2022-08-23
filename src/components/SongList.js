import React, { useState } from 'react';
import SongCard from "./SongCard"
import Form from "./Form";
 
function SongList({ songs, setSongGenre, addNewSong, setSongs, favorite, setFavorite, handleDeletedSong }) {
    
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/4b/11/73/4b11736a517898a9d6a4459d75f01880.jpg')";

    const [showForm, setShowForm] = useState(true)
    
    // const handleDeletedSong = (id) => {
    //     setSongs(songs.filter(song => id !== song.id))
    //     setFavorite(favorite.filter(song => id !== song.id))
    //     console.log("ID:", id)
    //   }

      const handleFavorites = (show) => {
        if (favorite.includes(show)) {
            console.log("already here")
        }
        else {
        setFavorite([...favorite, show])
        }
    }

    const songList = songs.map(song => <SongCard  key={song.id} song={song} handleDeletedSong={handleDeletedSong} handleFavorites={handleFavorites}/>)
 
    const handleForm = () => {
        setShowForm(!showForm)
    }
 
    return (
        <div className="songs-container">
            <div className="genre-navbar">
                    <nav onClick={(e) => setSongGenre("")}>ALL</nav>
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
