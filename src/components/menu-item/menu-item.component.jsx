import React from 'react';
import './menu-item.styles.scss';

const MenuItem = (item) => {
    return (
        <div className="menu-item"
        style={ //dynamic CSS

            // <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
            // alt={`Pic ${prop1.cardProp2.id}`} 
            // title={`Image ${prop1.cardProp2.id}`}

             { backgroundImage: 
                `url(${require(`./img/${item.ItemProp4}`)})`
                ,height: `${item.ItemProp5}`
                ,width: `${item.ItemProp5}`
                ,border: `3px solid pink`
             }
             //<img src={require(`./img/WOMEN.jpg`)}></img>
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

