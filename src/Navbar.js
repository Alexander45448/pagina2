import React from 'react'
import { Link } from 'react-router-dom'
 
class Navbar extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-ligth bg-dark justify-content-end">
                <Link className="navbar-brand" to="/">VIDEOJUEGOS</Link>
                <div className="collapse navbar-collapse flex-grow-0 ml-auto">
                    <ul className="navbar-nav text-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/second">ROCKET LEAGUE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/third">THE LEGENDO OF ZELDA</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
 
export default Navbar;
