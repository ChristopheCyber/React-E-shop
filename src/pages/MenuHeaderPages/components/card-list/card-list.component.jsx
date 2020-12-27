import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component.jsx';

function fctCalc(a) {
    //console.log("a.cardsProp1.length=",a.cardsProp1.length);
    var listLength;
    if (a.cardsListLength!==undefined) {
        listLength=a.cardsListLength;
    }
    else{listLength=a.cardsProp1.length;}
    return (listLength)
}

export const CardList = (prop1) => (
    <div>
        <div className={'card-list-divStyle ' + prop1.cardsPropImg + '-list'}>
            {/* console.log('In Card-list prop1.cardsPropImg=>', prop1.cardsPropImg) */}
            {/*console.log('In Card-list prop1.cardsListLength=>', prop1.cardsListLength)*/}
            {prop1.cardsProp1.filter( (cardElt,idx) => ( idx < fctCalc(prop1) ) ).map(
                cardElt => (
                    <Card key={cardElt.id} item={cardElt}
                        cardProp3={prop1.cardsPropImg} 
                        />
                )
            )}

        </div>
    </div>
);