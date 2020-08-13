import React from 'react';
import './directory.styles.scss';
import MenuItem  from '../menu-item/menu-item.component.jsx';

// export const DirectoryMenu = () => {
const DirectoryMenu = () => {
    return (
        <div className="directory-menu">
            <MenuItem ItemProp1="Item 1: Hats" 
                      ItemProp2="Shop Now"/>
            <MenuItem ItemProp1="Item 2: Jackets" 
                      ItemProp2="Shop Now"/>
            <MenuItem ItemProp1="Item 3: Sneakers" 
                      ItemProp2="Shop Now"/>
            <MenuItem ItemProp1="Item 4: WOMEN" 
                      ItemProp2="Shop Now"/>
            <MenuItem ItemProp1="Item 5: MEN" 
                      ItemProp2="Shop Now"/>
        </div>        );
}

export default DirectoryMenu;

