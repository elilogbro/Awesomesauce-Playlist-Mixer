import React, { useState } from 'react';

function SongCard({ song }) {

    const [lyricsToggle, setLyricsToggle] = useState(true)
    const handleLyricsToggle = () => {
        setLyricsToggle(!lyricsToggle)
    }

    return (
        <div>
            <img src={song.albumImage} alt="album"/>
            <h3>{song.title}</h3>
            <h4>{song.artist}</h4>
            <button onClick={handleLyricsToggle}>{lyricsToggle ? "Show Lyrics 🎶" : "Hide Lyrics 🎧"}</button>
            {lyricsToggle ? null: song.lyrics}
            <button>Add to Favorites 💖</button>
            

        </div>
    )
}

export default SongCard;