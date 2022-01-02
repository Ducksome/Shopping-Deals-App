import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../css/components/Navbar.css'

const Navbar = () => {
    return ( 
        <React.Fragment>
            <header>
                <h2 class="brand">Shopping Deals App</h2>
                <nav>
                    <ul class="nav-links">
                        <li>
                            <Link to="/register" class="link">Today's Selection</Link>
                        </li>
                        <li>
                            <Link to="/register" class="link">Categories</Link>
                        </li>
                        <li>
                            <Link to="/register" class="link"><button>Sign Up</button></Link>
                        </li>
                    </ul>
                </nav>
             </header>
             <Outlet />
        </React.Fragment>
     );
}
 
export default Navbar;