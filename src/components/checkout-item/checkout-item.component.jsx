import React from 'react';
//Redux:
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart-actions.js';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
    const { id, category, name, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={require(`../../pages/MenuHeaderPages/components/card/img/${category}/img${id}.jpg`)}
                    alt={`Pic ${id}`}
                /* title={`Image ${id}`} */
                /* className={`${cardProp3}`} */
                />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>);
};

// export default CheckoutItem;

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);