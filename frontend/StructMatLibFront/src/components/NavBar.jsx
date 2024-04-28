
import { useSelector } from 'react-redux';
import '../styles/NavBar.css'

import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const currentPage = useLocation().pathname;
    const { loggedIn, user } = useSelector((state) => state.user)



    return (
        <nav className='navbar'>
            <div className='navbar-buttons'>
                <Link to="/">
                    <button className={currentPage === '/' ? 'navbuttonactive' : 'navbutton'}>Home</button>
                </Link>
                <Link to='/materials'>
                    <button className={currentPage === '/materials' ? 'navbuttonactive' : 'navbutton'}>Materials</button>
                </Link>
                <Link to='/addnew'>
                    <button className={currentPage === '/addnew' ? 'navbuttonactive' : 'navbutton'}>Add new material</button>
                </Link>
                <Link to='/login'>
                    <button className={currentPage === '/login' ? 'navbuttonactive' : 'navbutton'}>
                        {loggedIn ? (`Logged in as ${user.name}` ) : ('Login')}
                        </button>
                </Link>
            </div>
        </nav>
    )
}
export default NavBar;