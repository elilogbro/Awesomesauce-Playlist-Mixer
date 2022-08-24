import React from 'react';
import SongCard from './SongCard'

function FavoriteSongList({favorite, setFavorite}) {

    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNTBAb-8-L9kCYaSSqdJRbDM2NTNTFMK1gg&usqp=CAU')"


    const handleDeletedFavorite = (id) => {
        setFavorite(favorite.filter(song => id !== song.id))
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