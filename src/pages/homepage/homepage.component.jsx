import React from 'react';
import './homepage.styles.scss';

// functionnal component
export const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">ITEM 1 Hats</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">ITEM 2 Jackets</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">ITEM 3 Sneakers</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">ITEM 4 WOMEN</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">ITEM 5 MEN</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
);
