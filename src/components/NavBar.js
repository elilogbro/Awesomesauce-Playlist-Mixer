import React, { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link className={"default-link"} to="/">About</Link>
            <Link className={"default-link"} to="/songs">Songs</Link>
            <Link className={"default-link"} to="/favorite-songs">Favorite Songs</Link>
        </nav>
    )
}

export default NavBar;