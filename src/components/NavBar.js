import React, { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav> 
            <span>
            <Link to="/">About</Link>
            <Link to="/songs">Songs</Link>
            <Link to="/favorite-songs">Favorite Songs</Link>
            </span>
        </nav>
    )
}

export default NavBar;

// className="default-link"