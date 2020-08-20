import React from 'react';
import './menu-item.styles.scss';

const MenuItem = (item) => {
    return (
        <div className={`menu-item ${item.ItemProp5}`} >
            <div className= {`background-image ${item.ItemProp7}`}
                style={{ //dynamic CSS
                    // <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
                    // alt={`Pic ${prop1.cardProp2.id}`} 
                    // title={`Image ${prop1.cardProp2.id}`}
                    backgroundImage: `url(${require(`./img/${item.ItemProp6}`)})`
                }}
            >
                <img className="image"
                    src={require(`./img/${item.ItemProp4}`)}
                    alt={`Pic ${item.ItemProp4}`}/>
            </div>
            <div className="content">
                <h1 className="title">
                    {/*item.ItemProp1.toLowerCase()*/}
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

