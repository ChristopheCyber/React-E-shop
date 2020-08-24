import React from 'react';
import './menu-item.styles.scss';

import AppComponent from '../../pages/MenuHeaderPages/App-component';
import { Route, Link } from 'react-router-dom';

const MenuItem = (item) => {
    return (
        <div className={`menu-item ${item.ItemProp5}`} >
            <div className={`background-image ${item.ItemProp7}`}
                style={{ //dynamic CSS
                    // <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
                    // alt={`Pic ${prop1.cardProp2.id}`} 
                    // title={`Image ${prop1.cardProp2.id}`}
                    backgroundImage: `url(${require(`./img/${item.ItemProp6}`)})`
                }}
            >
                <img className="image"
                    src={require(`./img/${item.ItemProp4}`)}
                    alt={`Pic ${item.ItemProp4}`} />
            </div>
            <div className="content">
                <h1 className="title">
                    {/*item.ItemProp1.toLowerCase()*/}
                    {item.ItemProp1}
                </h1>
                <span className="subtitle">
                    {/*<Link to="/paintings">{item.ItemProp2}</Link>*/}
                    <Link to={`./${item.ItemProp1.toLowerCase()}`} className="link">
                        {item.ItemProp2}
                    </Link>
                </span>
            </div>
            <Route exact path="/paintings"
                component={() =>
                    (<AppComponent propPageCat={`paintings`} />)} />
        </div>
    );
}

export default MenuItem;

