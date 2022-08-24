import { findByPlaceholderText } from '@testing-library/react';
import React, { useState } from 'react';

function Form({ addNewSong }) {

    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        genre: "",
        lyrics: "", 
        albumImage: "",
        isOnTour: false,
        isFavorited: false
    })

    const isValid = Boolean(formData.title && formData.artist && formData.genre && formData.lyrics && formData.albumImage);

    const handleForm = (e) => {
        e.preventDefault()
        if (isValid) {
            fetch("http://localhost:3000/songs", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(addNewSong(formData))
    
            setFormData({
                title: "",
                artist: "",
                genre: "",
                lyrics: "", 
                albumImage: "",
                isOnTour: false,
                isFavorited: false
            })
            alert('New song submitted successfully!');
        } 
    }

      const handleChange =(e) => {
        const key = e.target.name
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        setFormData({
            ...formData, [key] : value
        })
    } 

    return (
        <div className='form-box'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <form onSubmit={handleForm}>
                <label>Add A New Song</label>
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
                <label>Is the artist on tour?
                    <input 
                    type="checkbox" 
                    name="isOnTour"
                    className="check-box"
                    checked={formData.isOnTour}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit" value="Submit" id="submitBtn" className='submitBtn' disabled={!isValid}>{isValid ? "Submit" : "All fields must be filled out"}</button>
            </form>
        </div>
    )
}

export default Form;