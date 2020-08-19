import React from 'react';
import './menu-item.styles.scss';

const MenuItem = (item) => {
    return (
        <div className={`menu-item ${item.ItemProp5}`}
        style={ //dynamic CSS
            // <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
            // alt={`Pic ${prop1.cardProp2.id}`} 
            // title={`Image ${prop1.cardProp2.id}`}
             { backgroundImage: 
                `url(${require(`./img/${item.ItemProp4}`)})`
                ,border: `3px solid pink`
             }
        }>
            <div className="content">
                <h1 className="title">
                    {item.ItemProp1}
                </h1>
                <span className="subtitle">
                    {item.ItemProp2}
                </span>
            </div>
        </div>    
        );
}

export default MenuItem;

