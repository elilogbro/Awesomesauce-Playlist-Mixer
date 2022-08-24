import React, { useState } from 'react';

function Form({ addNewSong }) {

    // const [title, setTitle] = useState("")
    // const [artist, setArtist] = useState("")
    // const [genre, setGenre] = useState("")
    // const [lyrics, setLyrics] = useState("")
    // const [albumImage, setAlbumImage] = useState("")
    // const [isOnTour, setIsOnTour] = useState(false)

    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        genre: "",
        lyrics: "", 
        albumImage: "",
        isOnTour: false,
    })

    // const handleTitle = (e) => {
    //     setTitle(e.target.value)
    // }

    // const handleArtist = (e) => {
    //     setArtist(e.target.value)
    // }

    // const handleGenre = (e) => {
    //     setGenre(e.target.value)
    // }

    // const handleLyrics = (e) => {
    //     setLyrics(e.target.value)
    // }

    // const handleAlbumImage = (e) => {
    //     setAlbumImage(e.target.value)
    // }

    // const handleIsOnTour = (e) => {
    //     setIsOnTour(e.target.checked)
    // }

    const handleForm = (e) => {
        e.preventDefault()
        // let newSong = {
        //     id: "",
        //     title: title,
        //     artist: artist,
        //     lyrics,
        //     genre,
        //     albumImage,
        //     isOnTour
        // }
        fetch("http://localhost:3000/songs", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
                .then(res => res.json())
                .then(addNewSong(formData))

        setFormData("")
   
    }

      const handleChange =(e) => {
        const key = e.target.name
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        setFormData({
            ...formData, [key] : value
        })
    } 
    
    

    return (
        <div>
            <form onSubmit={handleForm}>
                <input 
                type="text" 
                name="artist" 
                placeholder="Artist"
                value={formData.artist}
                className="form-inputs"
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="title" 
                placeholder="Song Title"
                className="form-inputs"
                value={formData.title}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="genre" 
                placeholder="Genre"
                className="form-inputs"
                value={formData.genre}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="albumImage" 
                placeholder="Image-URL"
                className="form-inputs"
                value={formData.albumImage}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="lyrics" 
                placeholder="Lyrics"
                className="form-inputs"
                value={formData.lyrics}
                onChange={handleChange}
                />
                <p></p>
                <label>Is the artist on tour?
                    <input 
                    type="checkbox" 
                    name="isOnTour"
                    checked={formData.isOnTour}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;