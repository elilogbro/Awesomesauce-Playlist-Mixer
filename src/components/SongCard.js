import React, { useState } from 'react';

function SongCard({ song, handleDelete, isInFavorites, handleFavorites}) {

    const [lyricsToggle, setLyricsToggle] = useState(true)
    
    const handleLyricsToggle = () => {
        setLyricsToggle(!lyricsToggle)
    }

    return (
        <div className="songcard-container">
             <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <img src={song.albumImage} alt="album"/>
            <h3>{song.title}</h3>
            <h4>{song.artist}</h4>
            { !isInFavorites && <button className="rainbow-button" onClick={() => handleFavorites(song)}>Add to Favorites 💖</button> }
            { isInFavorites && <p>{song.isOnTour ? "Artist is on tour!" : "Artist is not on tour!"} </p>}
            <button className="rainbow-button" onClick={handleLyricsToggle}>{lyricsToggle ? "Show Lyrics 🎶" : "Hide Lyrics 🎧"}</button>
            {lyricsToggle ? null: song.lyrics}
            <button className="rainbow-button" onClick={() => handleDelete(song.id)}>Delete ❌</button>
          
        </div>
    )
}

export default SongCard;

