import React, { useState } from 'react';
import SongCard from "./SongCard"
import Form from "./Form";
 
function SongList({ songs, setSongGenre, addNewSong, favorite, setFavorite, handleDeletedSong }) {
    
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/4b/11/73/4b11736a517898a9d6a4459d75f01880.jpg')";

    const [showForm, setShowForm] = useState(true)
    

      const handleFavorites = (show) => {
        if (favorite.includes(show)) {
            console.log("already here")
        }
        else {
        setFavorite([...favorite, show])
        }
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/songs/${id}`, {
            method: "DELETE"
        })
            handleDeletedSong(id)
            console.log('from songlist')
    }

    const songList = songs.map(song => <SongCard  key={song.id} song={song} isInFavorites={false} handleDelete={handleDelete} handleFavorites={handleFavorites}/>)
 
    const handleForm = () => {
        setShowForm(!showForm)
    }
 
    return (
        <div className="songs-container">
             <style>
                    @import url('https://fonts.googleapis.com/css2?family=Asap:wght@500&display=swap');
                </style>
            <div className="genre-navbar">
                    <nav onClick={(e) => setSongGenre("")}>All</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>Rock</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>Folk</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>Indie</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>Hip-hop</nav>
                    <nav onClick={(e) => setSongGenre(e.target.innerText)}>Electronic</nav>
            </div>
            <div className="form-songlist-container">
                <div className="form-container">
               
                    <button id="form-button" onClick={handleForm}>{showForm ? "Hide Form" : "Show Form"}</button>
                    <br />
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
