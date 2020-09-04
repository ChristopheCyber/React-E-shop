import React from 'react';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.menunav.css';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div /*className="options"*/>
            <nav className="MenuNav">
                <ul>
                    <li>
                        <Link to='./' className="link3" /*className="logo-container"*/>
                            <Logo className="logo" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className="link">Shop</Link>
                    </li>
                    <li>
                        <Link to="./" className="link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent;
