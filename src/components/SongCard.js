import React, { useState } from 'react';

function SongCard({ song, handleDelete, isInFavorites, handleFavorites}) {

    const [lyricsToggle, setLyricsToggle] = useState(true)
    const [details, setDetails] = useState(false)
    
    const handleLyricsToggle = () => {
        setLyricsToggle(!lyricsToggle)
    }

    const showDetails = () => {
        setDetails(!details)
    }

    return (
        <div className="songcard-container">
             <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <img onClick={showDetails} src={song.albumImage} alt="album"/>
            { details ?
                <div className="inner-songcard-container">
                <h3>{song.title}</h3>
                <h4>{song.artist}</h4>
                    { !isInFavorites && 
                        <button className="rainbow-button" onClick={() => handleFavorites(song)}><span>Add to Favorites</span></button>
                    }
                    { isInFavorites &&
                        <p id="tour">{song.isOnTour ? "Artist is on tour!" : "Artist is not on tour!"} </p>
                    }
                    <button className="rainbow-button" onClick={handleLyricsToggle}><span>{ lyricsToggle ? "Show Lyrics" : "Hide Lyrics" }</span></button>
                    { lyricsToggle ? null: <p>{song.lyrics}</p> }
                <button className="rainbow-button" onClick={() => handleDelete(song.id)}><span>Delete</span></button>
                </div>
                : null
            }
        </div>
    )
}

export default SongCard;

