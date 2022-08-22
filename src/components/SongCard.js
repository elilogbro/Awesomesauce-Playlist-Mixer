import React from 'react';

function SongCard({ song }) {
    console.log(song)

    return (
        <div>
            <img src={song.albumImage} alt="album"/>
            <h3>{song.title}</h3>
            <h4>{song.artist}</h4>
            <button>Lyrics 🎶</button>
            <button>Add to Favorites 💖</button>
            

        </div>
    )
}

export default SongCard;