
import '../styles/NavBar.css'

import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const currentPage = useLocation().pathname;


    return (
        <nav className='navbar'>
            <Link to="/">
                <button className={currentPage === '/' ? 'navbuttonactive' : 'navbutton'}>Home</button>
            </Link>
            <Link to='/materials'>
                <button className={currentPage === '/materials' ? 'navbuttonactive' : 'navbutton'}>Materials</button>
            </Link>
            <Link to='/addnew'>
                <button className={currentPage === '/addnew' ? 'navbuttonactive' : 'navbutton'}>Add new material</button>
            </Link>

        </nav>
    )
}
export default NavBar;