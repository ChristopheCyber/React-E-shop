import React from 'react';
import './menu-item.styles.scss';

import { withRouter } from 'react-router-dom';

const MenuItem = (item) => {
    return (
        <div className={`menu-item ${item.size}`} >
            <div className={`background-image ${item.imageBackOn}`}
                style={{ //dynamic CSS
                    // <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
                    // alt={`Pic ${prop1.cardProp2.id}`} 
                    // title={`Image ${prop1.cardProp2.id}`}
                    backgroundImage: `url(${require(`./img/${item.imageBack}`)})`
                }}
            >
                <img className="image"
                    src={require(`./img/${item.image}`)}
                    alt={`Pic ${item.image}`} />
            </div>
            <div className="content">
                <h1 className="title">
                    {/*item.title.toLowerCase()*/}
                    {item.title}
                </h1>
                <span className="subtitle link" 
                    onClick={()=>(
                        item.history.push(`${item.match.url}${item.title.toLowerCase()}`)
                        )}
                >
                    {item.linkUrl}
                    {/*if using Link instead of HOC withRouter :
                    <Link to="/paintings">{item.linkUrl}</Link>
                    <Link to={`./${item.title.toLowerCase()}`} className="link">
                        {item.linkUrl}
                    </Link>*/}
                </span>
            </div>
        </div>
    );
}

//export default withRouter(MenuItem);
export default withRouter(MenuItem);

