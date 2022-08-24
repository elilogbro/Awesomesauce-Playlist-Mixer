import React from 'react';
import SongCard from './SongCard'

function FavoriteSongList({favorite, setFavorite, handleUpdatedFavorite}) {

    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNTBAb-8-L9kCYaSSqdJRbDM2NTNTFMK1gg&usqp=CAU')"


    const handleDeletedFavorite = (id) => {
        setFavorite(favorite.filter(song => id !== song.id))
        fetch(`http://localhost:3000/songs/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({isFavorited: false})
        })
        .then(res => res.json())
        .then(updatedFavorite => handleUpdatedFavorite(updatedFavorite))
    }

    const handleFavorites = () => {
        console.log('from favorites')
    }

    const renderFavorites = favorite.map(song => {
        return (<SongCard  key={song.id} song={song} isInFavorites={true} handleDelete={handleDeletedFavorite} handleFavorites={handleFavorites}/>)
    })

    return(
        <div className="favorites-container">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <h1>The Best of the Best Sauce</h1>
           <ul className="favorites-cards">{renderFavorites}</ul> 
        </div>
    )
}

export default FavoriteSongList;