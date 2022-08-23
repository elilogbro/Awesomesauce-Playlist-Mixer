import React from 'react';

function Form() {
    return (
        <div className="form-container">
            <button>Show Form</button>
            <form>
                <input type="text" name="artist" placeholder="Artist"/>
                <input type="text" name="title" placeholder="Song Title"/>
                <input type="text" name="image-url" placeholder="Image-URL"/>
                <input type="text" name="lyrics" placeholder="Lyrics"/>
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