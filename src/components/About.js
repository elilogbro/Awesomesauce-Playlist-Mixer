import React from 'react';

function About() {
     
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1445375011782-2384686778a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&w=1000&q=80')";



    return(
        <div className='new-line'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <h1>Welcome to your AwesomeSauce Playlist Mixer!</h1>
            <p> 
                <b>Follow the links above to guide you through your current song list. </b>
                <br /> Can't remember the lyrics to a song on the tip of your tongue? There's a search bar for that. 
                <br /> Wanna add a new song? There's a form for that. 
                <br /> Have a favorite you just gotta pin? Pin it up!
                <br /> Wanna know if your favorite band is touring? Check your favorites page.
            </p>
            <p>All of your playlist needs in one stop. Let your music obsession take over.</p>
        </div>
    )
}

export default About;