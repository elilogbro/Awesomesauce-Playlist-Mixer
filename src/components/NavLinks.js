import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    const [image, setImage] = useState("url('https://images.unsplash.com/photo-1445375011782-2384686778a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&w=1000&q=80')")

    document.body.style.backgroundImage = image;

    return (
        <div className="links-container">
            <span className="links">
                <NavLink to="/"
                    style={({ isActive}) =>
                    isActive ? 
                    { color: '#000000'}
                    : { color: '#000000',
                    textDecoration: 'none'
                    }}
                    onClick={() => setImage("url('https://images.unsplash.com/photo-1445375011782-2384686778a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&w=1000&q=80')")}
                    >About
                </NavLink>
                <NavLink to="/songs"
                    style={({ isActive}) =>
                    isActive ? 
                    { color: '#000000'}
                    : { color: '#000000',
                    textDecoration: 'none'
                    }}
                    onClick={() => setImage("url('https://i.pinimg.com/originals/4b/11/73/4b11736a517898a9d6a4459d75f01880.jpg')")}
                    >Songs
                </NavLink>
                <NavLink to="/favorite-songs"
                    style={({ isActive}) =>
                    isActive ? 
                    { color: '#000000'}
                    : { color: '#000000',
                    textDecoration: 'none'
                    }}
                    onClick={() => setImage("url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNTBAb-8-L9kCYaSSqdJRbDM2NTNTFMK1gg&usqp=CAU')")}
                    >Favorite Songs
            </NavLink>
            </span>
        </div>
    )
}

export default NavBar;