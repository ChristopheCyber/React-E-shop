import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
//component with Icon for shopping cart:
import CartIcon from '../cart-icon/cart-icon.component'
import './header.styles.menunav.css';
import './header.styles.scss';
import { Link } from 'react-router-dom';
// Firebase Authentication firebase.auth(): imported for sign-out 
import { auth } from "../../firebase/firebase.utils.js";
// for Redux use
import { connect } from 'react-redux';

const HeaderComponent = ({ currentUser }) => {
    console.log("HeaderComponent => currentUser=", currentUser);
    return (
        <div /*className="options"*/>
            <nav className="MenuNavHeader">
                <Link to='./' className="link3 logo" /*className="logo-container"*/>
                    <Logo  />
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
                        {/* {console.log("HeaderComponent => currentUser.user =",currentUser.user)}
                     */}
                        {(currentUser) ? (
                            console.log("HeaderComponent ? => currentUser !== null =",
                                currentUser),
                            <div className="link" onClick={() => {
                                auth.signOut().then(function () {
                                    console.log('Signed Out');
                                }, function (error) {
                                    console.error('Sign Out Error', error);
                                });
                            }
                            }>
                                Sign-Out
                            </div>
                        )
                            : (
                                console.log("HeaderComponent ? => currentUser === null =",
                                    currentUser),
                                <Link to="./signinandup" className="link">
                                    Sign in
                            </Link>
                            )
                        }
                    </li>
                    <li>
                        <CartIcon />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

//fct accessing the state props through the Root-Reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(HeaderComponent);
