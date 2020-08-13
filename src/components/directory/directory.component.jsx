import React from 'react';
import './directory.styles.scss';
import MenuItem  from '../menu-item/menu-item.component.jsx';

const DirectoryMenu = () => {
// export const DirectoryMenu = () => {
    return (
        <div className="directory-menu">
            <MenuItem prop1Item=""/>
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
        </div>        );
}

export default DirectoryMenu;

