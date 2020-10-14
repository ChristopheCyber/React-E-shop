import React from 'react';
//Redux:
import { connect } from 'react-redux';
import { clearItemFromCart, addItemInCart, removeItem } from '../../redux/cart/cart-actions.js';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem  }) => {
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
            {/* quantity with arrows for decrease/increase : */}
            <div className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>
                    &#10094;
                    {"-"}
                </div>
                <span className='quantity-number'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>
                    {"+"}
                    &#10095;
                </div>
            </div>
            <span className='price'>{price}</span>
            {/* cross for removing all same-items line : */}
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>);
};

// export default CheckoutItem;

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemInCart(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);