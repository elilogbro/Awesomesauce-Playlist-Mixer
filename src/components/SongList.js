import React from 'react';
import SongCard from "./SongCard"
import Form from "./Form";

function SongList({ songs, filterGenre }) {
    const songList = songs.map(song => <SongCard key={song.id} song={song} />)

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
                <Form />
                <div className="songlist-container">
                    <h1>AwesomeSauce Song List</h1>
                    {songList}
                </div>
            </div>
        </div>
    )
}

export default SongList;