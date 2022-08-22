import React, { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink to="/">About</NavLink>
            <NavLink to="/songs">Songs</NavLink>
            <NavLink to="/favorite-songs">Favorite Songs</NavLink>
        </nav>
    )
}

export default NavBar;