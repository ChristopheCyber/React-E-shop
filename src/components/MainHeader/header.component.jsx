import React from 'react';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.menunav.css';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div /*className="options"*/>
            <nav className="MenuNavHeader">
                <Link to='./' className="link3" /*className="logo-container"*/>
                    <Logo className="logo" />
                    Home
                </Link>
                <h1> E-Shop demo </h1>
                <ul>
                    <li>
                        <Link to="/shop" className="link">Shop</Link>
                    </li>
                    <li>
                        <Link to="./" className="link">Contact</Link>
                    </li>
                    <li>
                        <Link to="./" className="link">Sign in</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent;
