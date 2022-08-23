import React, { useState } from 'react';

function SongCard({ song, handleDeletedSong, handleFavorites }) {

    const [lyricsToggle, setLyricsToggle] = useState(true)
    
    const handleLyricsToggle = () => {
        setLyricsToggle(!lyricsToggle)
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/songs/${song.id}`, {
            method: "DELETE"
        })
            handleDeletedSong(song.id)
    }

    return (
        <div className="songcard-container">
            <img src={song.albumImage} alt="album"/>
            <h3>{song.title}</h3>
            <h4>{song.artist}</h4>
            <button onClick={() => handleFavorites(song)}>Add to Favorites 💖</button>
            <button onClick={handleLyricsToggle}>{lyricsToggle ? "Show Lyrics 🎶" : "Hide Lyrics 🎧"}</button>
            {lyricsToggle ? null: song.lyrics}
            <button onClick={() => handleDelete(song.id)}>Delete ❌</button>
        </div>
    )
}

export default SongCard;