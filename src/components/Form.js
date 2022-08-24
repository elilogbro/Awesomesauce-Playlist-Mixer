import React, { useState } from 'react';

function Form({ addNewSong }) {

    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        genre: "",
        lyrics: "", 
        albumImage: "",
        isOnTour: false,
    })

    const handleForm = (e) => {
        e.preventDefault()
 
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
        })
   
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
                <p></p>
                <label>Is the artist on tour?
                    <input 
                    type="checkbox" 
                    name="isOnTour"
                    className="check-box"
                    checked={formData.isOnTour}
                    onChange={handleChange}
                    />
                </label>
                <button type="submit" value="Submit" id="submitBtn" className='submitBtn'>Submit</button>
                {/* <br /> */}
                {/* <input className="submit-btn" type="submit" value="Submit" /> */}
            </form>
        </div>
    )
}

export default Form;