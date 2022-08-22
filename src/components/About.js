import React from 'react';

function About() {
     
    const arr = ['Follow the links above to guide you through your current song list.', 
        <br />, 'Can\'t remember the lyrics to a song on the tip of your tongue? There\'s a link for that.', 
        <br />, 'Wanna add a new song? There\'s a form for that.', 
        <br />, 'Have a favorite you just gotta pin? There\'s a way to do that too!', 
        <br />, 'Wanna know if your favorite band is touring? Click away! We got you.', 
        <br />, 'Can\'t seem to recall any of the songs you have on your playlist? Got you covered.'];


    return(
        <div className='new-line'>
            <h1>Welcome to your AwesomeSauce Playlist Mixer!</h1>
            <p>{arr}</p>
            <p>All of your playlist needs in one stop. Let your music obsession take over. </p>
        </div>
    )
}

export default About;