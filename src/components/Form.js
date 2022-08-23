import React, { useState } from 'react';

function Form({ addNewSong }) {

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [lyrics, setLyrics] = useState("")
    const [albumImage, setAlbumImage] = useState("")
    const [isOnTour, setIsOnTour] = useState(true)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleArtist = (e) => {
        setArtist(e.target.value)
    }

    const handleGenre = (e) => {
        setGenre(e.target.value)
    }

    const handleLyrics = (e) => {
        setLyrics(e.target.value)
    }

    const handleAlbumImage = (e) => {
        setAlbumImage(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        let newSong = {
            id: "",
            title,
            artist,
            lyrics,
            genre,
            albumImage,
            isOnTour 
        }
        fetch("http://localhost:3000/songs", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newSong)
        })
                .then(res => res.json())
                .then(addNewSong(newSong))
    }

        // setTitle("")
        // setArtist("")
        // setLyrics("")
        // setAlbumImage("")
        // setIsOnTour(null)

    return (
        <div className="form-container">
            <form onSubmit={handleForm}>
                <input 
                type="text" 
                name="artist" 
                placeholder="Artist"
                value={artist}
                onChange={handleArtist}
                />
                <input 
                type="text" 
                name="title" 
                placeholder="Song Title"
                value={title}
                onChange={handleTitle}
                />
                <input 
                type="text" 
                name="genre" 
                placeholder="Genre"
                value={genre}
                onChange={handleGenre}
                />
                <input 
                type="text" 
                name="image-url" 
                placeholder="Image-URL"
                value={albumImage}
                onChange={handleAlbumImage}
                />
                <input 
                type="text" 
                name="lyrics" 
                placeholder="Lyrics"
                value={lyrics}
                onChange={handleLyrics}
                />
                <br />
                <p>Is the artist on tour?</p>
                <label>
                    True
                    <input type="checkbox" name="true"/>
                </label>
                <label>
                    False
                    <input type="checkbox" name="false"/>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;