import React from 'react';
import './card.styles.css';
//import img01 from './img/img01.jpg' // relative path to image 

export const Card = (prop1) => (
    <div className={'card-container ' + prop1.cardProp3 + '-card'}>
        {/*<div className='card-container'> */}
        <strong> {prop1.cardProp2.name} </strong>
        {console.log('In Card id=', prop1.cardProp2.id
            , '=>', prop1.cardProp2.name
            , 'prop1.cardProp3=>', prop1.cardProp3)}
        {/* ---my pics--- */}
        <a href={require(`./img/${prop1.cardProp2.category}/img${prop1.cardProp2.id}.jpg`)}
        target="_blank" rel="noopener noreferrer">
            <img src={require(`./img/${prop1.cardProp2.category}/img${prop1.cardProp2.id}.jpg`)}
                alt={`Pic ${prop1.cardProp2.id}`}
                /* title={`Image ${prop1.cardProp2.id}`} */
                /* className={`${prop1.cardProp3}`} */
            />
        </a>
        <strong> email: </strong>
        <span>{prop1.cardProp2.email}</span>
        <strong> cardProp3: </strong>
        <span>Pic size=&gt;{prop1.cardProp3}</span>
        {/* 
        {/*---origin pics---
        <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
            alt={`Pic ${prop1.cardProp2.id}`} 
            title={`Image ${prop1.cardProp2.id}`}
        />
        <img src={`https://robohash.org/${prop1.cardProp2.id}?set=set4&size=180x180`} alt="pic 03"/>
        <img src={ require('./img/min/img02.jpg')} alt={"pic 02"} />
        <img title={"Image 01"} src={img01} alt={"pic 01"} />
        <img src={`https://robohash.org/${prop1.cardProp2.id}?set=set3`} alt="pic 03"/>
        */}
    </div>
);
