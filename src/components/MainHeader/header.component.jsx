import React from 'react';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.menunav.css';
import './header.styles.scss';
import { Link } from 'react-router-dom';
// Firebase Authentication firebase.auth(): imported for sign-out 
import { auth } from "../../firebase/firebase.utils.js";


const HeaderComponent = ({ currentUser }) => {
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
                    {/*
                     <li>
                         <Link to="./signinandup" className="link">Sign in</Link>
                     </li>
  */}
                    <li>
                        <Link to="./contact" className="link">Contact</Link>
                    </li>
                    <li>
                        {currentUser ?
                            <div className="link" onClick={ ()=>
                                {auth.signOut().then(function() {
                                    console.log('Signed Out');
                                  }, function(error) {
                                    console.error('Sign Out Error', error);
                                  }); 
                                }
                            }>
                                Sign-Out
                            </div>
                            :
                            <Link to="./signinandup" className="link">
                                Sign in
                            </Link>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent;
