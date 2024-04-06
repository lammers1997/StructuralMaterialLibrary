
import '../styles/NavBar.css'
 
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className='navbar'>
            <Link to='/'>
                <button className='navbutton'>Home</button>
            </Link>
            <Link to='/materials'>
                <button className='navbutton'>Materials</button>
            </Link>

        </nav>
    )
}
export default NavBar;