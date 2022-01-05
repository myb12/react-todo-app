import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top" >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand">
                        <img src="https://myb-stylish-watches.web.app/static/media/myb.ed0cbc62.svg" alt="Logo" className='logo' />
                    </Link>

                    <ul className="navbar-nav align-items-center ms-auto">

                        <li className="nav-item">
                            {
                                user.email ?

                                    (<Link to="/" className="nav-link"><img style={{ borderRadius: '50%', width: 30 }} src={user.photoURL} alt="" /> {user.displayName}</Link>)
                                    :
                                    <Link to="/login" className="nav-link">
                                        <button className='btn btn-sign btn-rounded'>
                                            Login
                                        </button>
                                    </Link>
                            }
                        </li>

                        <li className="nav-item">
                            {
                                user.email ?
                                    <Link to="/" className="nav-link">
                                        <button onClick={() => { logout() }} className="btn btn-sign btn-rounded">Sign Out</button>
                                    </Link>
                                    :
                                    <Link to="/login" className="nav-link">
                                        <button className="btn btn-sign btn-rounded">Sign Up</button>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;