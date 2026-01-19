import { NavLink } from "react-router-dom";


function Navigation(){
    return(
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/favouries">Favourites</NavLink>
        </nav>
    )
}

export default Navigation