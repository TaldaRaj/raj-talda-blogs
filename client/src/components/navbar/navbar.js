import './navbar.css'
import { Link } from 'react-router-dom'; 
import { useContext } from 'react';
import { context } from '../../context/context';
const Navbar = () => {

    const {user,dispatch} = useContext(context)
    const PF = "http://localhost:5000/images/"

    const handleClick = () => {
        dispatch({type:"LOGOUT"})
    }


    return (
        <>
          <div className="navbar">
            <div className="navbar-left">
                <ul className="navbar-left-list">
                <i className="navbar-list-icons fab fa-facebook-square"></i>
                <i className="navbar-list-icons fab fa-instagram-square"></i>
                <i className="navbar-list-icons fab fa-twitter"></i>
                <i className="navbar-list-icons fab fa-linkedin"></i>
                </ul>
            </div>
            <div className="navbar-center">
            <ul className="navbar-center-list">
                <li className="navbar-list-items">
                <Link className="link" to="/">
                    Home
                </Link>
                </li>
                <li className="navbar-list-items">About</li>
                <li className="navbar-list-items">Contact</li>
                <li className="navbar-list-items">
                    <Link className="link" to="/writepost">
                    Write
                    </Link></li>
               {user && <li className="navbar-list-items" onClick={handleClick}>Logout</li>}

            </ul>
            </div>
            <div className="navbar-right">
                {user ? (
                <Link  to="/settings">
                <img className="profile-picture"src={PF+user.profilePic} alt="profile" />
                </Link>): 
                (
                <ul className="navbar-center-list">
                    <li className="navbar-list-items">
                    <Link className="link" to="/login">
                    Login
                    </Link>
                    </li> 
                    <li className="navbar-list-items">
                    <Link className="link" to="/register">
                    Register
                    </Link>
                    </li>     
                </ul>
                )}
                <i className="search-icon fas fa-search"></i>
            </div>
          </div>  
        </>
    )
}

export default Navbar

