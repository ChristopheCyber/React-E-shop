import React from 'react';
import './card.styles.css';
//import img01 from './img/img01.jpg' // relative path to image 
// for Redux use :
import { connect } from 'react-redux';
import { addItemInCart } from '../../../../redux/cart/cart-actions';

import CustomButton from '../../../../components/reusable-components/custom-button/custom-button.component';

const Card = ({item,cardProp3,fctAddItemInCart}) => {
    //destruct item useful fields:
    const { id, name, category, email, price } = item;
    return (
    <div className={'card-container ' + cardProp3 + '-card'}>
        {/*<div className='card-container'> */}
        <strong> {name} </strong>
        {/* console.log('In Card id=', id
            , '=>', name
            , 'cardProp3=>', cardProp3) */}
        {/* ---my pics--- */}
        <a href={require(`./img/${category}/img${id}.jpg`)}
            target="_blank" rel="noopener noreferrer">
            <img src={require(`./img/${category}/img${id}.jpg`)}
                alt={`Pic ${id}`}
            /* title={`Image ${id}`} */
            /* className={`${cardProp3}`} */
            />
        </a>
        <span>
            <strong>Seller contact: </strong>
            <span>{email}</span>
        </span>
        <span className="PriceLib">
            Price :
            <span className="PriceVal">
                {' $ '}{price}
            </span>
        </span>
        <CustomButton
            onClick={()=>
                {
                /* console.log("typeof fctAddItemInCart =", typeof fctAddItemInCart,
                    "; fctAddItemInCart =", fctAddItemInCart); */
                //sending 1 item as user.payload in addItemInCart action:
                //type: 'ADD_ITEM',payload: item
                fctAddItemInCart(item)
                }
            }
            type="button" value="Validation" name="Submit"
            classAdd
        >
            Add to cart
        </CustomButton>
        {/* 
        {/*---origin pics---
        <img src={ require(`./img/img${id}.jpg`)} 
            alt={`Pic ${id}`} 
            title={`Image ${id}`}
        />
        <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt="pic 03"/>
        <img src={ require('./img/min/img02.jpg')} alt={"pic 02"} />
        <img title={"Image 01"} src={img01} alt={"pic 01"} />
        <img src={`https://robohash.org/${id}?set=set3`} alt="pic 03"/>
        */}
    </div>
);
};

//REDUX:
const mapDispatchToProps = dispatch => ({
    fctAddItemInCart: (item) => dispatch(addItemInCart(item))
});

export default connect(
    null,
    mapDispatchToProps
)(Card);