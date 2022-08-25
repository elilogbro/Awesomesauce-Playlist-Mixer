import React, { useState } from 'react';
import SongCard from "./SongCard"
import Form from "./Form";
import Search from "./Search"
 
function SongList({ songs, setSongGenre, addNewSong, favoritedSong, handleDeletedSong, search, setSearch, handleUpdatedFavorite}) {
    
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/4b/11/73/4b11736a517898a9d6a4459d75f01880.jpg')";

    const [showForm, setShowForm] = useState(true)

    const handleFavorites = (song) => {
        if (favoritedSong.includes(song)) {
            console.log("song is already in favorites")
        }
        else {
            fetch(`http://localhost:3000/songs/${song.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({isFavorited: true})
            })
            .then(res => res.json())
            .then(updatedFavorite => handleUpdatedFavorite(updatedFavorite))
        }
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/songs/${id}`, {
            method: "DELETE"
        })
        handleDeletedSong(id)
    }

    const songList = songs.map(song =>
        <SongCard
            key={song.id}
            song={song}
            isInFavorites={false}
            handleDelete={handleDelete}
            handleFavorites={handleFavorites}
        />
    )
 
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
                    {showForm ?
                        <Form addNewSong={addNewSong} />
                        : null
                    }
                </div>
                <div className="search-songlist-container">
                    <Search search={search} setSearch={setSearch}/>
                    <div className="songlist-container">
                        {songList}
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default SongList;
