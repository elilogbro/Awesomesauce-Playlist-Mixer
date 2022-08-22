import React from 'react';
import SongCard from "./SongCard"

function SongList({ songs }) {

    const songList = songs.map(song => <SongCard key={song.id} song={song} />)

    return (
        <div className="songlist-container">
            <h1>AwesomeSauce Song List</h1>
            {songList}
        </div>
    )
}

export default SongList;