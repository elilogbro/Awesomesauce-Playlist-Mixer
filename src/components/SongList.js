import React, { useState } from 'react';
import SongCard from "./SongCard"
import Form from "./Form";

function SongList({ songs, filterGenre, addNewSong }) {
    const songList = songs.map(song => <SongCard key={song.id} song={song} />)

    const [showForm, setShowForm] = useState(true)
    

    const handleForm = () => {
        setShowForm(!showForm)
    }

    return (
        <div className="songs-container">
            <h2>Choose a Genre</h2>
            <div className="genre-navbar">
                    <nav onClick={filterGenre}>Rock</nav>
                    <nav onClick={filterGenre}>Folk</nav>
                    <nav onClick={filterGenre}>Indie</nav>
                    <nav onClick={filterGenre}>Hip-Hop</nav>
                    <nav onClick={filterGenre}>Electronic</nav>
            </div>
            <div className="form-songlist-container">
                <button onClick={handleForm}>{showForm ? "Show Form" : "Hide Form"}</button>
               {showForm ? null : <Form addNewSong={addNewSong} />}
                <div className="songlist-container">
                    {songList}
                </div>
            </div>
        </div>
    )
}

export default SongList;